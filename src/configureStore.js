import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './combineReducers'

export const history = createHistory()

const initialState = {} //this is where we would hydrate our app with serevr state
const loggerMiddleware = createLogger()
const enhancers = []
const middleware = [
  loggerMiddleware,
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )
}

