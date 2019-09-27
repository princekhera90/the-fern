import React from 'react';
import './App.css';
import Login from './login'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">The Fern</a>
      <a class="nav-link" href="#">Login</a>
      <a class="nav-link" href="#">Dashboard</a>
      <a class="nav-link" href="#">Profile</a>
      </nav>
      <Login></Login>
    </div>
  );
}

export default App;
