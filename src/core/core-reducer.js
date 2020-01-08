import CoreState from './core-state'
import CoreEnums from './resources/enums'

export default (state = CoreState, action) => {
  let tabArray = null
  let index = null

  switch (action.type) {
    case CoreEnums.reducers.SET_TOOLBAR:
      return Object.assign({}, state, {
        toolbar: action.payload
      })
    case CoreEnums.reducers.SET_TABS:
      tabArray = state.tabNavigation.tabs.concat()

      // If tab with same key exists, activate it by changing the activeKey
      for (const i in tabArray) {
        if (tabArray[i].key === action.payload.key) {
          return Object.assign({}, state, {
            tabNavigation: {
              ...state.tabNavigation,
              activeKey: action.payload.key
            }
          })
        }
      }

      // If we get here, we need to add a new Tab
      // We can group tabs together that have the same app property
      index = tabArray.findIndex(tab => {
        return tab.app === action.payload.app
      })

      // Increment the index to add tab immediately after tab with same app
      index++

      if (index === 0) {
        tabArray.push(action.payload)
      } else {
        tabArray.splice(index, 0, action.payload)
      }

      return Object.assign({}, state, {
        tabNavigation: {
          ...state.tabNavigation,
          tabs: tabArray,
          activeKey: action.payload.key
        }
      })
    default:
      return state
  }
}
