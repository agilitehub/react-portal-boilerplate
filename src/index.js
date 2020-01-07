import { eventEmitter } from './core/core-index'
import AppConfig from './app-config'

require('./core/core-index')

if (AppConfig.enableCustomIndex) {
  require('./custom/index')
}

eventEmitter.emit('onappload')
