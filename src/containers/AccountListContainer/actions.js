import Accounts from '../../mockData/accounts.json'

export const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS'
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS'

export function fetchAccounts() {
  return { type: REQUEST_ACCOUNTS, Accounts }
}
