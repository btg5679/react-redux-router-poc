import React, { Component } from 'react';
import { connect } from 'react-redux'
import Accounts from '../../mockData/accounts.json'
import './AccountListContainer.css';
import AccountList from '../../components/AccountList/AccountList';
import {
  fetchAccounts
} from '../../containers/AccountListContainer/actions'

class AccountListContainer extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchAccounts())
	}

	render() {
		return (
			<div className="AccountList">
				<AccountList accts={this.props.accts} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('stateaaa', state);
  return {
    accts: state.accountsApp.accts.accts
  }
}

export default connect(
  mapStateToProps
)(AccountListContainer)