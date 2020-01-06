import AppConfig from '../app-config'
import theme from './resources/theme'

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
  const state = {
    general: {
      ...AppConfig.general,
      title: process.env.REACT_APP_NAME
    },
    theme,
    user: null,
    toolbar: {
      enabled: AppConfig.toolbar.enabled,
      state: AppConfig.toolbar.defaultState
    },
    tabObject: {
      tabs: [],
      activeKey: '',
      activeApp: '',
      tabType: ''
    }
  }

  return state
}
