import CoreState from './core-state'
import CoreEnums from './resources/enums'

export default (state = CoreState, action) => {
  switch (action.type) {
    case CoreEnums.reducers.SET_TOOLBAR:
      return Object.assign({}, state, {
        toolbar: action.payload
      })
    default:
      return state
  }
}
