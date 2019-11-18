import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import TeamHome from './components/TeamHome';
import ProfileForm from './components/ProfileForm';
import Welcome from './components/Welcome';

import logo from './public/images/coproductions-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <a className="logo" href="/">
            <img src={logo} alt="Coproductions logo" />
          </a>
          <div className="Logincontainer">
            <Login />
          </div>
          <nav className="navcontainer">
            <span className="navitem">
              <Link className="navitem">Home </Link>
            </span>
            <span className="navitem">
              <Link className="navitem" to="/profile">
                My Profile{' '}
              </Link>
            </span>
            <span className="navitem">
              <Link className="navitem" to="/teams">
                My Teams{' '}
              </Link>
            </span>
            <span className="navitem">
              <Link className="navitem" to="/new_profile">
                Create Profile{' '}
              </Link>
            </span>
          </nav>
        </div>
        <div className="main">
          <Switch>
            <Route path="/profile/" component={Profile} />
            <Route path="/teams/" component={TeamHome} />
            <Route path="/new_profile/" component={ProfileForm} />
            <Route path="/" component={Welcome} />
          </Switch>
        </div>
        <div className="footer">
          <small>Copyright &#169; 2019 Red Bird Marketing LLC.</small>
        </div>
      </div>
    );
  }
}

export default App;
