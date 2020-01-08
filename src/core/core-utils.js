import AppConfig from '../app-config'
import CoreTheme from './resources/theme'
import CoreMemoryStore from './core-memory-store'

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
    landingPageContent: AppConfig.landingPageContent,
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
