import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import TeamHome from './components/TeamHome';
import ProfileForm from './components/ProfileForm';
import Welcome from './components/Welcome';

import logo from './images/coproductions-logo.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user_id: ''
    };
    this.storeLogin = this.storeLogin.bind(this);
  }

  storeLogin(evt) {
    console.log(evt);
    this.setState({
      username: evt.user.username,
      user_id: evt.user.id
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <a className="logo" href="/">
            <img src={logo} alt="Coproductions logo" />
          </a>
          <div className="Logincontainer">
            <Login
              storeLogin={this.storeLogin}
              username={this.state.username}
              id={this.state.user_id}
            />
          </div>
          <nav className="navcontainer">
            <span className="navitem">
              <Link className="navitem" to="/">
                Home{' '}
              </Link>
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
            <Route
              path="/profile/"
              // component={Profile}
              // user_id={this.state.user_id}
              render={routerProps => <Profile {...routerProps} user_id={this.state.user_id} />}
            />
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
