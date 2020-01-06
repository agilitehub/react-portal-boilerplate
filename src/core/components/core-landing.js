import React from 'react'
import { useSelector } from 'react-redux'

import CoreTabNavigation from './core-tab-navigation'

export default function CoreLanding (props) {
  const coreState = useSelector(state => state.core)
  // const landingPage = !coreState.tabNavigation.enabled && coreState.landingPageContent ? <coreState.landingPageContent /> : null

  return (
    <div className='content-wrapper'>
      {coreState.tabNavigation.enabled ? (
        <CoreTabNavigation />
      ) : (
        coreState.landingPageContent ? <coreState.landingPageContent /> : null
      )}
    </div>
  )
}
