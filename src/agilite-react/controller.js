import State from './state'
import Store from '../store'
import Enums from './enums'

export const handleMenuItemClick = (event) => {
  Store.dispatch({ type: Enums.reducers.MENU_ITEM_CLICK, key: event.key })
}

export const handleMenuAction = (action) => {
  switch (action) {
    case 'open':
      Store.dispatch({ type: Enums.reducers.LEFT_MENU_OPEN })
      break
    case 'close':
      Store.dispatch({ type: Enums.reducers.LEFT_MENU_CLOSE })
      break
    default:
      break
  }
}

export const handleTabAction = (action, key) => {
  switch (action) {
    case 'change':
      Store.dispatch({ type: Enums.reducers.CHANGE_TAB, key })
      break
    case 'close':
      Store.dispatch({ type: Enums.reducers.CLOSE_TAB, key })
      break
    default:
      break
  }
}

export const addTab = (activeKey, tab, state) => {
  let tabExists = false
  let result = null

  for (const tmpEntry of state.tabNavigation.tabs) {
    if (tmpEntry.key === activeKey) {
      tabExists = true
      break
    }
  }

  if (tabExists) {
    result = {
      ...state,
      tabNavigation: { ...state.tabNavigation, activeKey },
      leftMenu: {
        ...state.leftMenu,
        visible: false
      }
    }
  } else {
    state.tabNavigation.tabs.push(tab)

    result = {
      ...state,
      tabNavigation: { ...state.tabNavigation, activeKey, tabs: state.tabNavigation.tabs },
      leftMenu: {
        ...state.leftMenu,
        visible: false
      }
    }
  }

  return result
}

export const closeTab = (tabs, targetKey) => {
  let tmpTabs = tabs
  let tmpActiveKey = null

  tmpTabs = tmpTabs.filter(tab => tab.key !== targetKey)
  tmpActiveKey = tmpTabs.length > 0 ? tmpTabs[tmpTabs.length - 1].key : State.tabNavigation.rootTabKey

  return { tabs: tmpTabs, activeKey: tmpActiveKey }
}