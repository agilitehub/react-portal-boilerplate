import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Form, Input, Select, Button } from 'antd'
import { useDispatch } from 'react-redux'

import BasicCRUDAppEnums from '../enums'
import AgiliteReactEnums from '../../../agilite-react/enums'

const BasicForm = () => {
  const dispatch = useDispatch()
  const [record, setRecord] = useState({
    name: '',
    description: '',
    gender: '',
    age: ''
  })

  const handleChange = (key, value) => {
    setRecord(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleSubmit = () => {
    dispatch({ type: BasicCRUDAppEnums.reducers.ADD_RECORD, payload: record })
    dispatch({ type: AgiliteReactEnums.reducers.CLOSE_TAB, key: 'new_record' })
  }

  useEffect(() => {
    console.log('basic-form')
  })

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
                  <span style={{ color: '#DC3645' }}>* </span>Name
                  <Form.Item
                    noStyle
                    name='name'
                    rules={[{ required: true, message: 'Please provide a Name' }]}
                  >
                    <Input onChange={e => handleChange('name', e.target.value)} />
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <span style={{ color: '#DC3645' }}>* </span>Age
                  <Form.Item
                    noStyle
                    name='age'
                    rules={[{ required: true, message: 'Please provide an Age' }]}
                  >
                    <Input type='number' onChange={e => handleChange('age', e.target.value)} />
                  </Form.Item>
                </Form.Item>
                <Form.Item>
                  <span style={{ color: '#DC3645' }}>* </span>Gender
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
                <Button style={{ backgroundColor: '#29A745', color: 'white', marginRight: 10 }} htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
              <Form.Item noStyle>
                <Button style={{ backgroundColor: '#DC3645', color: 'white' }}>
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

export default BasicForm
