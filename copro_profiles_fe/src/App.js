import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
// import Login from './components/Login';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import Team from './components/Team';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <a className="logo" href="#">
            <img src="../public/images/coproductions-logo.png" alt="Coproductions logo" />
          </a>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/profile">My Profile </Link>
              </li>
              <li>
                <Link to="/teams">My Teams </Link>
              </li>
            </ul>
          </nav>
          {/* <div className="login"><Login /></div> */}
        </div>
        <div className="main">
          {/* <Profile /> */}
          {/* <Switch> */}
          <Route path="/profile/" component={Profile} />
          <Route path="/teams/" component={Team} />
          {/* </Switch> */}
        </div>
      </div>
    );
  }
}

export default App;
