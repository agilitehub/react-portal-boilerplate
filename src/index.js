import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useSelector } from 'react-redux'
import { AgiliteReact } from 'agilite-react'

import Store from './store'

// Initialize App
const App = () => {
  const state = useSelector(state => state.agiliteReact)
  return <AgiliteReact state={state} />
}

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'))
