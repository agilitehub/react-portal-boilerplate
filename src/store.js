import Thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { initCustomReducers } from './agilite-react-setup'

// Reducers
import agiliteReactReducer from './agilite-react/reducer'

const customReducers = initCustomReducers()
const store = createStore(combineReducers({
  agiliteReact: agiliteReactReducer,
  ...customReducers
}), applyMiddleware(Thunk))

export default store
