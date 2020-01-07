import React from 'react'
import { useSelector } from 'react-redux'

import CoreTabNavigation from './core-tab-navigation'

export default function CoreLanding (props) {
  const LandingPageContent = useSelector(state => state.core.landingPageContent)
  const tabNavigationEnabled = useSelector(state => state.core.tabNavigation.enabled)
  // const landingPage = !coreState.tabNavigation.enabled && coreState.landingPageContent ? <coreState.landingPageContent /> : null

  return (
    <div className='content-wrapper'>
      {tabNavigationEnabled ? (
        <CoreTabNavigation />
      ) : (
        LandingPageContent ? <LandingPageContent /> : null
      )}
    </div>
  )
}
