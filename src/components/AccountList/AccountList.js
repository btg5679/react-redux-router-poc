import React, { Component } from 'react';
import { connect } from 'react-redux'
import './AccountList.css';

class AccountList extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ accts: nextProps.data });  
	}

	render() {
		return (
			<div>{this.props.accts.map(this.renderAccount)}</div>
		);
	}

	renderAccount({accountDisplayName, id, balance, type}) {
		return <div className="account" key={id}>
			<span className="accountName">{accountDisplayName}</span>
			<span className="accountBalance">{balance}</span>
			<span className="accountType">{type}</span>
		</div>;
	}
}

export default AccountList;