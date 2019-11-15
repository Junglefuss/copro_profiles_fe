import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
// import './App.css';

// function Login(props) {
//   return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
// }

// export default Login;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/accounts/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/accounts/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    const logged_out_nav = (
      <ul>
        <li onClick={() => this.state.display_form('login')}>login</li>
        <li onClick={() => this.state.display_form('signup')}>signup</li>
      </ul>
    );

    const logged_in_nav = (
      <ul>
        <li onClick={this.state.handle_logout}>logout</li>
      </ul>
    );

    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <div className="Login">
        <Login
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {form}
        <h3>{this.state.logged_in ? `Hello, ${this.state.username}` : 'Please Log In'}</h3>
      </div>
    );
  }
}

export default Login;

// Login.propTypes = {
//   logged_in: PropTypes.bool.isRequired,
//   display_form: PropTypes.func.isRequired,
//   handle_logout: PropTypes.func.isRequired
// };
