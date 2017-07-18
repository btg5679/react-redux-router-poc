import Accounts from '../mockData/accounts.json'

export const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS'
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS'

function requestAccounts() {
  return {
    type: REQUEST_ACCOUNTS
  }
}

function getLocalAccountJSON() {
  return fetch(Accounts);
}

export function fetchAccounts() {
  return function (dispatch) {
    return getLocalAccountJSON().then(
      response => dispatch(receiveAccounts(response))
    );
  };
}

function receiveAccounts(json) {
  console.log('zzzreceiveAccounts', json)
  return {
    type: RECEIVE_ACCOUNTS,
    accts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// export default (state , action) => {
//   // switch (action.type) {
//   //   case INCREMENT_REQUESTED:
//   //     return {  ...state, isIncrementing: true }
//   //   case INCREMENT:
//   //     return { ...state, count: state.count + 1, isIncrementing: !state.isIncrementing }
//   //   case DECREMENT_REQUESTED:
//   //     return { ...state, isDecrementing: true }
//   //   case DECREMENT:
//   //     return { ...state, count: state.count - 1, isDecrementing: !state.isDecrementing }
//   //   default:
//   //     return state
//   // }
//   return state;
//}