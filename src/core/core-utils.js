import AppConfig from '../app-config'
import CoreTheme from './resources/theme'

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
  let theme = CoreTheme
  let title = process.env.REACT_APP_NAME

  if (AppConfig.general.theme) {
    theme = AppConfig.general.theme
  }

  if (AppConfig.general.title) {
    title = AppConfig.general.title
  }

  const state = {
    general: {
      ...AppConfig.general,
      title,
      theme,
      user: null
    },
    tabNavigation: {
      ...AppConfig.tabNavigation,
      tabs: [],
      activeKey: '',
      activeApp: '',
      tabType: ''
    },
    landingPageContent: AppConfig.landingPageContent,
    toolbar: {
      enabled: AppConfig.toolbar.enabled,
      state: AppConfig.toolbar.defaultState
    },
    appLogo: AppConfig.appLogo
  }

  return state
}
