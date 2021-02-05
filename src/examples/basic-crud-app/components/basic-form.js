import React, { useState, memo } from 'react'
import { Card, Row, Col, Form, Input, Select, Button } from 'antd'
import { useDispatch } from 'react-redux'

import BasicCRUDAppEnums from '../enums'
import AgiliteReactEnums from '../../../agilite-react/enums'
import Theme from '../../../agilite-react/theme'

const _BasicForm = ({ data, isNewRecord }) => {
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
      type: isNewRecord ? BasicCRUDAppEnums.reducers.ADD_RECORD : BasicCRUDAppEnums.reducers.EDIT_RECORD,
      payload: record
    })
    closeTab()
  }

  const closeTab = () => {
    dispatch({ type: AgiliteReactEnums.reducers.CLOSE_TAB, key: isNewRecord ? 'new_record' : record.id })
  }

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
              name: record.name,
              age: record.age,
              gender: record.gender,
              description: record.description
            }}
          >
            <Row justify='space-between'>
              <Col span={10}>
                <Form.Item>
                  <span style={{ color: Theme.twitterBootstrap.danger }}>* </span>Name
                  <Form.Item
                    noStyle
                    name='name'
                    rules={[{ required: true, message: 'Please provide a Name' }]}
                  >
                    <Input onChange={e => handleChange('name', e.target.value)} />
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <span style={{ color: Theme.twitterBootstrap.danger }}>* </span>Age
                  <Form.Item
                    noStyle
                    name='age'
                    rules={[{ required: true, message: 'Please provide an Age' }]}
                  >
                    <Input type='number' onChange={e => handleChange('age', e.target.value)} />
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <span style={{ color: Theme.twitterBootstrap.danger }}>* </span>Gender
                  <Form.Item
                    noStyle
                    name='gender'
                    rules={[{ required: true, message: 'Please select a Gender' }]}
                  >
                    <Select
                      onChange={value => handleChange('gender', value)}
                      options={[
                        {
                          label: 'Male',
                          value: 'Male'
                        },
                        {
                          label: 'Female',
                          value: 'Female'
                        }
                      ]}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  rules={[{ required: true, message: 'Please provide a Name' }]}
                >
                  Description
                  <Input.TextArea rows={5} onChange={e => handleChange('description', e.target.value)} />
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

const BasicForm = memo(_BasicForm)

export default BasicForm
