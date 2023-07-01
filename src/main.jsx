import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { logger } from './middleware/index.js'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootreducer.js'

const composealt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnchancer = composealt(applyMiddleware(thunk, logger))

const store = createStore(rootReducer, composeEnchancer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
