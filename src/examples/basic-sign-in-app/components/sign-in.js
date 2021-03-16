import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Row, Col, Card, Spin } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'

import Theme from '../../../agilite-react/resources/theme'
import AgiliteReactEnums from '../../../agilite-react/resources/enums'
import State from '../state'

const SignIn = () => {
  const dispatch = useDispatch()
  const [signInDisabled, setSignInDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [signInEntry, setSignInEntry] = useState({
    email: '',
    password: ''
  })

  const onChange = (key, value) => {
    setSignInEntry(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const signIn = () => {
    setSignInDisabled(true)
    setLoading(true)
    dispatch({ type: AgiliteReactEnums.reducers.SIGN_IN })
    State.email = signInEntry.email
  }

  return (
    <Row justify='center' style={{ marginTop: 50 }}>
      <Col xs={23} sm={23} md={16} lg={12} xl={10} xxl={8}>
        <Card title='Sign in below to access the Portal' type='inner'>
          <Form onFinish={signIn}>
            <Form.Item
              name='email'
              rules={[{ required: true, message: 'Please provide an Email' }]}
            >
              <Input
                disabled={signInDisabled}
                prefix={<MailOutlined style={{ color: Theme.secondaryDark }} />}
                type='email'
                placeholder='Email'
                value={signInEntry.email}
                onChange={e => onChange('inputEmail', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: 'Please provide a Password' }]}
            >
              <Input
                disabled={signInDisabled}
                prefix={<LockOutlined style={{ color: Theme.secondaryDark }} />}
                placeholder='Password'
                type='password'
                value={signInEntry.password}
                onChange={e => onChange('inputPassword', e.target.value)}
              />
            </Form.Item>
            <Row justify='center'>
              <Col>
                <Form.Item>
                  <Button
                    disabled={signInDisabled}
                    style={{
                      backgroundColor: Theme.twitterBootstrap.success,
                      color: Theme.white,
                      width: 'auto',
                      marginRight: 10
                    }}
                    htmlType='submit'
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row justify='center'>
              <Col>
                <Spin spinning={loading} size='small' />
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default SignIn
