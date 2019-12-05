import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import LoginNav from './LoginNav';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayed_form: '',
			logged_in: localStorage.getItem('token') ? true : false,
			username: this.props.username,
			user_id: this.props.id
		};
		this.handle_login = this.handle_login.bind(this);
		this.handle_signup = this.handle_signup.bind(this);
		this.handle_logout = this.handle_logout.bind(this);
		this.display_form = this.display_form.bind(this);
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
					this.setState({ username: this.props.username });
				})
				.then(json => this.props.storeLogin(json))
				.catch(function(error) {
					console.log(error);
				});
		}
	}

	handle_login(e, data) {
		e.preventDefault();
		console.log(data);
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
				this.props.storeLogin(json);
				this.setState({
					logged_in: true,
					displayed_form: ''
				});
			});
	}

	handle_signup(e, data) {
		console.log(data);
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
	}

	handle_logout() {
		localStorage.removeItem('token');
		this.setState({ logged_in: false, username: '' });
	}

	display_form(form) {
		this.setState({
			displayed_form: form
		});
	}

	render() {
		let props = this.props;
		console.log({ props });

		let form;
		switch (this.state.displayed_form) {
			case 'login':
				form = (
					<LoginForm
						className="authform"
						handle_login={this.handle_login}
					/>
				);
				break;
			case 'signup':
				form = (
					<SignupForm
						className="authform"
						handle_signup={this.handle_signup}
					/>
				);
				break;
			default:
				form = null;
		}

		return (
			<div className="Login">
				{form}
				<div>
					{this.state.logged_in ? (
						`User: ${props.username}`
					) : (
						<LoginNav
							logged_in={this.state.logged_in}
							display_form={this.display_form}
							handle_logout={this.handle_logout}
						/>
					)}
					{/* <LoginNav
            logged_in={this.state.logged_in}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
          /> */}
				</div>
			</div>
		);
	}
}

export default Login;
