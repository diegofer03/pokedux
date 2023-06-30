import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { pokemonReducer } from './reducers/pokemons.js'
import { logger } from './middleware/index.js'
import thunk from 'redux-thunk'

const composealt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnchancer = composealt(applyMiddleware(thunk, logger))

const store = createStore(pokemonReducer, composeEnchancer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
