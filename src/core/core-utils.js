export const setupReducers = (data, callback) => {
  const core = require('./core-reducer').default
  const AppConfig = require('../app-config').default

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
