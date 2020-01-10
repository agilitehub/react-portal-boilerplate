import React, { Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd'

import CoreMemoryStore from '../core-memory-store'
import CoreEnums from '../resources/enums'

// CUSTOM COMPONENTS
import CoreLoading from './core-loading'

// LAZY COMPONENTS
const CoreToolbarContainer = lazy(() => import('../containers/core-toolbar-container'))
const CoreLanding = lazy(() => import('../components/core-landing'))

export default function CoreApp () {
  const toolbarEnabled = useSelector(state => state.core.toolbar.enabled) || false

  useEffect(() => {
    // Check if we need to prompt a user before the browser window/tab is closed. NOTE: Doesn't work properly on all browsers
    const enableOnUnloadPrompt = CoreMemoryStore.enableOnUnloadPrompt || false

    if (enableOnUnloadPrompt) {
      window.addEventListener('beforeunload', (e) => {
        (e || window.event).returnValue = CoreEnums.messages.APP_CLOSE // Gecko + IE
        return CoreEnums.messages.APP_CLOSE // Gecko + Webkit, Safari, Chrome etc.
      })
    }
  }, [])

  return (
    <Row type='flex' justify='center'>
      <Col xs={24} sm={24} md={24} lg={24}>
        <Suspense fallback={<CoreLoading />}>
          {toolbarEnabled ? <CoreToolbarContainer /> : null}
          <CoreLanding />
        </Suspense>
      </Col>
    </Row>
  )
}
