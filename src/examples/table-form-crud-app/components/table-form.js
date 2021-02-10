import React, { useState, memo } from 'react'
import { Card, Row, Col, Form, Input, Button, Table } from 'antd'
import { useDispatch } from 'react-redux'

// React Drag n Drop
import { DragSource, DropTarget } from 'react-dnd'
import { withDragDropContext } from '../../../agilite-react/reusables/components/html5-backend'
import update from 'immutability-helper'

import BasicCRUDAppEnums from '../resources/enums'
import AgiliteReactEnums from '../../../agilite-react/resources/enums'
import Theme from '../../../agilite-react/resources/theme'
import Templates from '../resources/templates'

function dragDirection (
  dragIndex,
  hoverIndex,
  initialClientOffset,
  clientOffset,
  sourceClientOffset
) {
  const hoverMiddleY = (initialClientOffset.y - sourceClientOffset.y) / 2
  const hoverClientY = clientOffset.y - sourceClientOffset.y

  if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) {
    return 'downward'
  }

  if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
    return 'upward'
  }
}

class BodyRow extends React.Component {
  render () {
    const {
      isOver,
      connectDragSource,
      connectDropTarget,
      moveRow,
      dragRow,
      clientOffset,
      sourceClientOffset,
      initialClientOffset,
      ...restProps
    } = this.props

    const style = {
      ...restProps.style,
      cursor: 'move'
    }

    let className = restProps.className

    if (isOver && initialClientOffset) {
      const direction = dragDirection(
        dragRow.index,
        restProps.index,
        initialClientOffset,
        clientOffset,
        sourceClientOffset
      )

      if (direction === 'downward') {
        className += ' drop-over-downward'
      }

      if (direction === 'upward') {
        className += ' drop-over-upward'
      }
    }

    return connectDragSource(
      connectDropTarget(
        <tr {...restProps} className={className} style={style} />
      )
    )
  }
}

const rowSource = {
  beginDrag (props) {
    return { index: props.index }
  }
}

const rowTarget = {
  drop (props, monitor) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    if (dragIndex === hoverIndex) {
      return
    }

    props.moveRow(dragIndex, hoverIndex)
    monitor.getItem().index = hoverIndex
  }
}

const DragableBodyRow = DropTarget('row', rowTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  sourceClientOffset: monitor.getSourceClientOffset()
}))(
  DragSource('row', rowSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    dragRow: monitor.getItem(),
    clientOffset: monitor.getClientOffset(),
    initialClientOffset: monitor.getInitialClientOffset()
  }))(BodyRow)
)

const _TableForm = ({ data, isNewRecord }) => {
  const dispatch = useDispatch()
  const [record, setRecord] = useState(data)

  const handleChange = (key, value) => {
    setRecord(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleSubmit = () => {
    dispatch({
      type: isNewRecord ? BasicCRUDAppEnums.reducers.SUBMIT_RECORD : BasicCRUDAppEnums.reducers.UPDATE_RECORD,
      payload: record
    })
    closeTab()
  }

  const closeTab = () => {
    dispatch({ type: AgiliteReactEnums.reducers.CLOSE_TAB, key: isNewRecord ? 'new_record' : record.id })
  }

  const components = {
    body: {
      row: DragableBodyRow
    }
  }

  const moveRow = (dragIndex, hoverIndex) => {
    const data = record.entries
    const dragRow = data[dragIndex]

    setRecord(
      update(record, {
        entries: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]]
        }
      })
    )
  }

  const addRow = () => {
    const data = JSON.parse(JSON.stringify(record.entries))
    const tmpObj = {
      key: Date.now(),
      label: '',
      type: '',
      value: ''
    }

    data.push(tmpObj)
    setRecord(prevState => ({
      ...prevState,
      entries: data
    }))
  }

  const deleteRow = (index) => {
    const data = JSON.parse(JSON.stringify(record.entries))
    data.splice(index, 1)

    setRecord(prevState => ({
      ...prevState,
      entries: data
    }))
  }

  const changeRow = (index, field, value) => {
    const data = JSON.parse(JSON.stringify(record.entries))

    data[index][field] = value

    setRecord(prevState => ({
      ...prevState,
      entries: data
    }))
  }

  const columns = Templates.formTableColumns(addRow, deleteRow, changeRow, record.entries)

  return (
    <Row justify='center'>
      <Col span={16}>
        <Card
          type='inner'
          title='New Record'
        >
          <Form
            onFinish={handleSubmit}
            name='form'
            initialValues={{
              ...Templates.dataTemplate(),
              name: record.name,
              description: record.description
            }}
          >
            <Row justify='space-between'>
              <Col span={8}>
                <Form.Item>
                  <span style={{ color: Theme.twitterBootstrap.danger }}>* </span>Name
                  <Form.Item
                    noStyle
                    name={Templates.dataModel.name.key}
                    rules={[{ required: Templates.dataModel.name.required, message: Templates.dataModel.name.validationMsg }]}
                  >
                    <Input onChange={e => handleChange(Templates.dataModel.name.key, e.target.value)} />
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  Description
                  <Input.TextArea rows={5} onChange={e => handleChange(Templates.dataModel.description.key, e.target.value)} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={23}>
                <Form.Item>
                  <Table
                    bordered
                    pagination={false}
                    columns={columns}
                    dataSource={record.entries}
                    components={components}
                    onRow={(record, index) => ({
                      index,
                      moveRow
                    })}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Form.Item noStyle>
                <Button style={{ backgroundColor: Theme.twitterBootstrap.success, color: 'white', marginRight: 10 }} htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
              <Form.Item noStyle>
                <Button
                  style={{ backgroundColor: Theme.twitterBootstrap.danger, color: 'white' }}
                  onClick={closeTab}
                >
                  Cancel
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

const TableForm = withDragDropContext(memo(_TableForm))

export default TableForm
