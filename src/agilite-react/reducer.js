import State from './state'
import Enums from './resources/enums'
import { closeTab, loadContent } from './controller'

// Components
import SignIn from '../examples/basic-sign-in-app/components/sign-in'

const reducer = (state = State, action) => {
  let tmpObj = null

  switch (action.type) {
    case Enums.reducers.ADD_TAB:
    case Enums.reducers.MENU_ITEM_CLICK:
      return loadContent(action.payload, state)
    case Enums.reducers.CHANGE_TAB:
      return {
        ...state,
        tabNavigation: {
          ...state.tabNavigation,
          activeKey: action.key
        }
      }
    case Enums.reducers.CLOSE_TAB:
      tmpObj = closeTab(state.tabNavigation.tabs, action.key)

      return {
        ...state,
        tabNavigation: {
          ...state.tabNavigation,
          ...tmpObj
        }
      }
    case Enums.reducers.LEFT_MENU_OPEN:
      return {
        ...state,
        leftMenu: {
          ...state.leftMenu,
          visible: true
        }
      }
    case Enums.reducers.LEFT_MENU_CLOSE:
      return {
        ...state,
        leftMenu: {
          ...state.leftMenu,
          visible: false
        }
      }
    case Enums.reducers.SIGN_IN:
      return {
        ...state,
        leftMenu: {
          ...state.leftMenu,
          leftMenuEnabled: true
        },
        tabNavigation: {
          ...state.tabNavigation,
          enabled: true
        },
        rootContent: null
      }
    case Enums.reducers.SIGN_OUT:
      return {
        ...state,
        leftMenu: {
          ...state.leftMenu,
          leftMenuEnabled: false
        },
        tabNavigation: {
          ...state.tabNavigation,
          enabled: false
        },
        rootContent: <SignIn />
      }
    default:
      return state
  }
}

export default reducer
