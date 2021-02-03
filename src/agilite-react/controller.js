import State from './state'

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
      tabNavigation: { ...state.tabNavigation, activeKey }
    }
  } else {
    state.tabNavigation.tabs.push(tab)

    result = {
      ...state,
      tabNavigation: { ...state.tabNavigation, activeKey, tabs: state.tabNavigation.tabs }
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
