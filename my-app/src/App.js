import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './login'
import Dashboard from './dashboard';

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">The Fern</a>
            <a class="nav-link" href="#">Login</a>
            <a class="nav-link" href="/dashboard">Dashboard</a>
            <a class="nav-link" href="#">Profile</a>
          </nav>
        </div>

        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
      </React.Fragment>
  </Router>)
}

export default App;
