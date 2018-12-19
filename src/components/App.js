import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './reset.scss';
import './base.scss';
import AuthRedirect from './AuthRedirect/AuthRedirect.js';
import Signin from './Signin/Signin.js';
import Signup from './Signup/Signup.js';
import Dashboard from './Dashboard/Dashboard.js';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="*" component={AuthRedirect} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
