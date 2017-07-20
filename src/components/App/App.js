import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import About from '../About/About'
import LeftPanel from '../LeftPanel/LeftPanel'
import RightPanel from '../RightPanel/RightPanel'

const App = () => (
	<div>
		<header className="header">
			<Link to="/">Account Summary</Link>
			<Link to="/about-us">Transfers</Link>
		</header>

		<main className="appContainer">
			<Route path="/" component={LeftPanel} />
			<div className="mainContent">
				<Route exact path="/"  />
				<Route exact path="/about-us" component={About} />
			</div>
			<Route path="/" component={RightPanel} />
		</main>
	</div>
)

export default App