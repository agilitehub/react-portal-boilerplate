import State from './state'
import Enums from './enums'

const reducer = (state = State, action) => {
  let tmpArray = []

  switch (action.type) {
    case Enums.reducers.ADD_RECORD:
      tmpArray = Object.assign([], state.data)
      tmpArray.push(action.payload)

      return {
        ...state,
        data: tmpArray
      }
    default:
      return state
  }
}

export default reducer
