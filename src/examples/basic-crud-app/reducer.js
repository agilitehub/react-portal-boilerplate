import State from './state'
import Enums from './enums'

const reducer = (state = State, action) => {
  let data = []
  let tmpIndex = null

  switch (action.type) {
    case Enums.reducers.ADD_RECORD:
      data = Object.assign([], state.data)
      data.push(action.payload)

      return {
        ...state,
        data
      }
    case Enums.reducers.EDIT_RECORD:
      data = Object.assign([], state.data)
      tmpIndex = data.findIndex(record => record.id === action.payload.id)
      data.splice(tmpIndex, 1, action.payload)

      return {
        ...state,
        data
      }
    case Enums.reducers.DELETE_RECORD:
      data = Object.assign([], state.data)
      tmpIndex = data.findIndex(record => record.id === action.id)
      data.splice(tmpIndex, 1)

      return {
        ...state,
        data
      }
    default:
      return state
  }
}

export default reducer
