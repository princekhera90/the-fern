import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Signup from './signup';
import Dashboard from './dashboard';

ReactDOM.render(<Router>
    <React.Fragment>
        <div>
            <Route exact path="/" component={Dashboard }/>
        </div>
    </React.Fragment>
  </Router>, document.getElementById('root')   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
