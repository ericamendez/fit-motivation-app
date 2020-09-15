import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App.component';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers/rootReducer'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)