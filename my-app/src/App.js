import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <Router>
    <React.Fragment>
      <div className="App">
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Navbar</a>
        </nav>
      </div>

      <Route path="/register" component={Register}/>
    </React.Fragment>
  </Router>
  );
}

export default App;
