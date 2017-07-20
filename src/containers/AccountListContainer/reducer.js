import { combineReducers } from 'redux'
import {
	REQUEST_ACCOUNTS, 
	RECEIVE_ACCOUNTS
} from '../../containers/AccountListContainer/actions'

const initialState = {
  ui: {
  	selectedAccount: false
  },
  accts: []
}

function accts(state = initialState, action) {
   switch (action.type) {
    case REQUEST_ACCOUNTS:
      return Object.assign({}, state, {
      	accts: [...action.Accounts]
      })
    default:
      return state
  }
}

const acctsApp = combineReducers({
  accts
})

export default acctsApp;

