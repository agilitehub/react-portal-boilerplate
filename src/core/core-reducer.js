import CoreState from './core-state'
import CoreEnums from './resources/enums'
import { setupState, prepTabArray } from './core-utils'

export default (state = CoreState, action) => {
  let tabArray = null

  switch (action.type) {
    case CoreEnums.reducers.SET_TOOLBAR:
      return Object.assign({}, state, {
        toolbar: action.payload
      })
    case CoreEnums.reducers.SET_TABS:
      tabArray = prepTabArray(action.tabs, action.payload)

      return Object.assign({}, state, {
        tabNavigation: {
          ...state.tabNavigation,
          tabs: tabArray,
          activeKey: action.payload.key
        }
      })
    case CoreEnums.reducers.LOAD_CONTENT:
      // Check if Tab Navigation is enabled and load component accordingly
      if (state.tabNavigation.enabled) {
        tabArray = prepTabArray(state.tabNavigation.tabs, action.payload)

        return Object.assign({}, state, {
          tabNavigation: {
            ...state.tabNavigation,
            tabs: tabArray,
            activeKey: action.payload.key
          }
        })
      } else {
        return Object.assign({}, state, {
          landingPageContent: action.payload.content
        })
      }
    case CoreEnums.reducers.RESET:
      return Object.assign({}, state, setupState())
    case CoreEnums.reducers.SET_STATE:
      return Object.assign({}, state, action.state)
    default:
      return state
  }
}
