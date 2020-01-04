import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { setupReducers } from './core-utils'
import CoreEnums from './resources/enums'
import CoreAppContainer from './containers/core-app-container'

// CSS Files
import 'antd/dist/antd.css'
import './resources/style.css'

const indexReducerWrapper = combineReducers(setupReducers())
const devTools = process.env.NODE_ENV === CoreEnums.values.PRODUCTION ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk))
const store = createStore(indexReducerWrapper, {}, devTools)

ReactDOM.render(
  <Provider store={store}>
    <CoreAppContainer />
  </Provider>,
  document.getElementById(CoreEnums.values.ROOT)
)
