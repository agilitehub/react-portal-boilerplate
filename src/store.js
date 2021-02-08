import Thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

// Reducers
import agiliteReactReducer from './agilite-react/reducer'
import basicCRUDAppReducer from './examples/basic-crud-app/reducer'

const store = createStore(combineReducers({
  agiliteReact: agiliteReactReducer,
  basicCRUDApp: basicCRUDAppReducer
}), applyMiddleware(Thunk))

export default store
