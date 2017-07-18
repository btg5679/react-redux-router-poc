import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import accountReducers from './AccountReducers'

export default combineReducers({
  routerReducer,
  accountReducers
})
