import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import EventEmitter from 'eventemitter3'

import { setupReducers } from './core-utils'
import CoreEnums from './resources/enums'
import CoreApp from './components/core-app'

// CSS Files
import 'antd/dist/antd.css'
import './resources/style.css'

const indexReducerWrapper = combineReducers(setupReducers())
const devTools = process.env.NODE_ENV === CoreEnums.values.PRODUCTION ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk))
const store = createStore(indexReducerWrapper, {}, devTools)

ReactDOM.render(
  <Provider store={store}>
    <CoreApp />
  </Provider>,
  document.getElementById(CoreEnums.values.ROOT)
)

export const eventEmitter = new EventEmitter()
