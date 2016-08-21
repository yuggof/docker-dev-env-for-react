import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello!</h1>
  </Provider>,
  document.getElementById('root')
)

