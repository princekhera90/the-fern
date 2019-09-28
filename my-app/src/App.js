import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetAdsForm from './GetAdsForm/GetAdsForm';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">TheFern</a>
      </nav>
      <GetAdsForm></GetAdsForm>
    </div>
  );
}

export default App;
