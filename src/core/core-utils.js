import AppConfig from '../app-config'
import CoreTheme from './resources/theme'
import CoreMemoryStore from './core-memory-store'
import CoreEnums from './resources/enums'

export const setupReducers = () => {
  const core = require('./core-reducer').default

  let manifest = null

  const reducers = {
    core
  }

  // Loop through Manifests
  for (const x in AppConfig.moduleManifests) {
    manifest = AppConfig.moduleManifests[x].default
    reducers[x] = manifest.reducer.default
  }

  return reducers
}

export const setupState = () => {
  // This logic sets up the Core State as well as the Hidden Store
  let theme = CoreTheme
  let title = process.env.REACT_APP_NAME

  if (AppConfig.theme) {
    theme = AppConfig.theme
  }

  if (AppConfig.title) {
    title = AppConfig.title
  }

  const state = {
    tabNavigation: {
      ...AppConfig.tabNavigation,
      tabs: [],
      activeKey: ''
    },
    rootContent: AppConfig.rootContent,
    landingPageContent: null,
    toolbar: {
      enabled: AppConfig.toolbar.enabled,
      state: AppConfig.toolbar.defaultState
    }
  }

  // Setup Hidden Store
  CoreMemoryStore.agilite = AppConfig.agilite
  CoreMemoryStore.title = title
  CoreMemoryStore.theme = theme
  CoreMemoryStore.enableOnUnloadPrompt = AppConfig.enableOnUnloadPrompt
  CoreMemoryStore.appLogo = AppConfig.appLogo

  return state
}

export const prepTabArray = (tabArray, payload) => {
  let index = null

  // If tab with same key exists, activate it by changing the activeKey
  for (const i in tabArray) {
    if (tabArray[i].key === payload.key) {
      return tabArray
    }
  }

  // If we get here, we need to add a new Tab
  // We can group tabs together that have the same app property
  index = tabArray.findIndex(tab => {
    return tab.app === payload.app
  })

  // Increment the index to add tab immediately after tab with same app
  index++

  if (index === 0) {
    tabArray.push(payload)
  } else {
    tabArray.splice(index, 0, payload)
  }

  return tabArray
}

export const closeTab = (activeKey, targetKey, tabs, dispatch) => {
  let newTabIndex = null

  // Find Target Pane to perform the resets
  for (const x in tabs) {
    if ((tabs[x].key === targetKey) && (targetKey === activeKey)) {
      newTabIndex = parseInt(x) - 1
      break
    }
  }

  const newTabs = tabs.filter(pane => pane.key !== targetKey)

  // Determine Active Tab
  if (newTabIndex !== null) {
    activeKey = newTabs[newTabIndex].key
  }

  dispatch({
    type: CoreEnums.reducers.SET_TABS,
    tabs: newTabs,
    payload: {
      key: activeKey
    }
  })
}
