// We need to get a handle on the App's Event Emitter
import { eventEmitter } from '../core/core-index'

const handleOnAppLoad = (e) => {
  console.log('onappload triggered in custom index', e)
  eventEmitter.removeListener('onappload', handleOnAppLoad)
}

eventEmitter.on('onappload', handleOnAppLoad)
