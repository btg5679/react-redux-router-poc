import {
	REQUEST_ACCOUNTS, 
	RECEIVE_ACCOUNTS
} from '../actions/Account'


export default function accts(
  	state = {
  		isFetching: false,
    	didInvalidate: false,
    	items: []
  	}, action ) {
  	switch (action.type) {
    	case REQUEST_ACCOUNTS:
      		return Object.assign({}, state, {
	        	isFetching: true,
	        	didInvalidate: false
	      	})
	     case RECEIVE_ACCOUNTS:
		      return Object.assign({}, state, {
		        isFetching: false,
		        didInvalidate: false,
		        items: action.posts,
		        lastUpdated: action.receivedAt
		      })
  		default:
    		return state
  		}
}