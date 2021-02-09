import Thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

// Reducers
import agiliteReactReducer from './agilite-react/reducer'
import basicCRUDAppReducer from './examples/basic-crud-app/reducer'
import tableFormCRUDAppReducer from './examples/table-form-crud-app/reducer'

const store = createStore(combineReducers({
  agiliteReact: agiliteReactReducer,
  // Add Custom Reducers below
  basicCRUDApp: basicCRUDAppReducer,
  tableFormCRUDApp: tableFormCRUDAppReducer
}), applyMiddleware(Thunk))

export default store
