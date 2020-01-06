import { eventEmitter } from './core/index'
import AppConfig from './app-config'

require('./core/index')

if (AppConfig.general.enableCustomIndex) {
  require('./custom/index')
}

eventEmitter.emit('onappload')
