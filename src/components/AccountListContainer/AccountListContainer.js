import React, { Component } from 'react';
import { connect } from 'react-redux'
import Accounts from '../../mockData/accounts.json'
import './AccountListContainer.css';
import AccountList from '../AccountList/AccountList';
import {
  fetchAccounts
} from '../../actions/Account'
//import $ from 'jquery'; 

class AccountListContainer extends Component {
	constructor(props){
		super(props);
		this.state = { accts: [] };
	}

	componentDidMount() {
		const { dispatch } = this.props
		this.setState({ accts: Accounts })
		//EXAMPLE SERVICE CALL
		// $.ajax({
		// 	url: "accounts.json'",
		// 	dataType: 'json',
		// 	success: function(accounts) {
		// 		console.log('accountsjson', accounts);
		//        	this.setState({accts: accounts});
		//      	}.bind(this)
		// });
	}

	render() {
		return (
			<div className="AccountList">
				<AccountList accts={this.state.accts} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  console.log('ownProps', ownProps)
  return{
  	accts: state.accts
  }
}

export default connect(
  mapStateToProps
)(AccountListContainer)