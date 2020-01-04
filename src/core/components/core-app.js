import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import AppConfig from '../../app-config'
import CoreEnums from '../resources/enums'

// import CoreToolbarContainer from '../containers/core-toolbar-container'
// import CoreAnonymousWrapper from './core-anonymous-wrapper'
// import CoreLandingContainer from '../containers/core-landing-container'

// TODO: Add logic to enable/disable reCaptcha logic from AgiliteConfig

export default function CoreApp () {
  useEffect(() => {
    console.log('Running Use Effect')
    window.addEventListener('beforeunload', (e) => {
      (e || window.event).returnValue = CoreEnums.messages.APP_CLOSE // Gecko + IE
      return CoreEnums.messages.APP_CLOSE // Gecko + Webkit, Safari, Chrome etc.
    })
  }, [])

  return (
    <div>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={24} lg={24}>
        </Col>
      </Row>
    </div>
  )
}
