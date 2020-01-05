import React, { memo } from 'react'
import { Skeleton, Row, Col } from 'antd'

function TempCoreLoading () {
  return (
    <div>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={16} md={12} lg={8}>
          <Skeleton active />
          <Skeleton active />
        </Col>
      </Row>
    </div>
  )
}

const CoreLoading = memo(TempCoreLoading)
export default CoreLoading
