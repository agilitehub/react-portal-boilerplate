import React, { memo } from 'react'
import { Row, Col, Card } from 'antd'

function TempRootContent () {
  return (
    <>
      <h3>
        <center>
        Below are some hints and tips to help you make the most of the Admin
        Portal
        </center>
      </h3>
      <br />
      <Row type='flex' justify='center'>
        <Col xs={23} sm={23} md={23} lg={8} xl={8} xxl={8}>
          <Card title='Navigation' bordered>
            Click on the 'burger' menu icon on the top-left corner of this
            Portal. This will launch the menu drawer which lists all the
            Agilit-e modules as menu items. Select the module you wish you
            configure profiles for. To return to this page, select the 'Home'
            menu item in the menu drawer. Alternatively, click on the 'Home' tab
            in the Tab Bar.
          </Card>
        </Col>
        <Col xs={23} sm={23} md={23} lg={8} xl={8} xxl={8}>
          <Card title='Agilit-e Resources' bordered>
            On the top-right corner of this Portal, you will see a 'burger' menu
            icon. This menu provides links to Agilit-e's documentation as well
            as other resources including our blog, open source contributions and
            social accounts.
          </Card>
        </Col>
        <Col xs={23} sm={23} md={23} lg={7} xl={7} xxl={7}>
          <Card title='Mustache.js' bordered>
            When setting up profiles for each of the modules, take note of input
            fields whos labels are suffixed with {'{{m}}'}. These fields accept
            Mustache tags, which you can use to reference values passed to the
            module's API via the Request's body content.
          </Card>
        </Col>
      </Row>
    </>
  )
}

const RootContent = memo(TempRootContent)
export default RootContent
