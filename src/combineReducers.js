import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import accountsApp from './containers/AccountListContainer/reducer'

export default combineReducers({
  routerReducer,
  accountsApp
})
