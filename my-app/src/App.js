import React from 'react';
import './App.css';
import GetAdsForm from './GetAdsForm/GetAdsForm';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './login'
import Dashboard from './dashboard';


function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex flex-row mb-4">
            <Link className="navbar-brand" to="/">The Fern</Link>
            <Link className="btn btn-outline-info nav-link mr-auro" to="/dashboard">Dashboard</Link>
            <Link className="btn btn-outline-info nav-link mr-auto ml-2" to="/profile">Profile</Link>
            <Link className="btn btn-outline-info nav-link p-2" to="/login">Login</Link>
            <Link className="btn btn-outline-info nav-link p-2 ml-2" to="/register">Sign Up</Link>
          </nav>
        </div>
        
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={GetAdsForm}/>/
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
      </React.Fragment>
  </Router>)
}

export default App;
