import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import HelloWorld from '../HelloWorld/HelloWorld';
import HelloWorldList from '../HelloWorldList/HelloWorldList';
import About from '../About/About'

const App = () => (
  <div>
    <header>
      <Link to="/">Hello World List</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={HelloWorldList} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App