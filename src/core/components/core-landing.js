import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'

// CUSTOM COMPONENTS
import CoreLoading from './core-loading'

// LAZY COMPONENTS
const CoreTabNavigation = lazy(() => import('./core-tab-navigation'))

export default function CoreLanding (props) {
  const tabNavigationEnabled = useSelector(state => state.core.tabNavigation.enabled)
  const RootContent = useSelector(state => state.core.rootContent)
  let LandingPageContent = useSelector(state => state.core.landingPageContent)

  if (!LandingPageContent) {
    LandingPageContent = <RootContent />
  }

  return (
    <Suspense fallback={<CoreLoading />}>
      <div className='content-wrapper'>
        {tabNavigationEnabled ? <CoreTabNavigation /> : LandingPageContent}
      </div>
      <div style={{ width: '100%', height: 50 }}>
        {/* This is used to create spacing below cards when resolution is around 1280 x 720 */}
      </div>
    </Suspense>
  )
}
