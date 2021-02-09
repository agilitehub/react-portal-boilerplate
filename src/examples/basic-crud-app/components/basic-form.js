import React, { useState, memo } from 'react'
import { Card, Row, Col, Form, Input, Select, Button } from 'antd'
import { useDispatch } from 'react-redux'

import BasicCRUDAppEnums from '../resources/enums'
import AgiliteReactEnums from '../../../agilite-react/resources/enums'
import Theme from '../../../agilite-react/resources/theme'
import Templates from '../resources/templates'

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
      type: isNewRecord ? BasicCRUDAppEnums.reducers.SUBMIT_RECORD : BasicCRUDAppEnums.reducers.UPDATE_RECORD,
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
              name: record.name || '',
              age: record.age || '',
              gender: record.gender || '',
              description: record.description || ''
            }}
          >
            <Row justify='space-between'>
              <Col span={10}>
                <Form.Item>
                  <span style={{ color: Theme.twitterBootstrap.danger }}>* </span>Name
                  <Form.Item
                    noStyle
                    name={Templates.dataTemplate.name.key}
                    rules={[{ required: Templates.dataTemplate.name.required, message: Templates.dataTemplate.name.validationMsg }]}
                  >
                    <Input onChange={e => handleChange(Templates.dataTemplate.name.key, e.target.value)} />
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <span style={{ color: Theme.twitterBootstrap.danger }}>* </span>Age
                  <Form.Item
                    noStyle
                    name={Templates.dataTemplate.age.key}
                    rules={[{ required: Templates.dataTemplate.age.required, message: Templates.dataTemplate.age.validationMsg }]}
                  >
                    <Input type='number' onChange={e => handleChange(Templates.dataTemplate.age.key, e.target.value)} />
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <span style={{ color: Theme.twitterBootstrap.danger }}>* </span>Gender
                  <Form.Item
                    noStyle
                    name={Templates.dataTemplate.gender.key}
                    rules={[{ required: Templates.dataTemplate.gender.required, message: Templates.dataTemplate.gender.validationMsg }]}
                  >
                    <Select
                      onChange={value => handleChange(Templates.dataTemplate.gender.key, value)}
                      options={Templates.dataTemplate.gender.options}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item>
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
