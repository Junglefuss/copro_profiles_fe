import React, { Component } from 'react';

export default class TeamForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team_admin = this.props.user,
            team_name = '',
            logo = '',
            description = ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event, data) {
        event.preventDefault();
        fetch('http://localhost:8000/api/teams/', {
            method: 'POST',
            headers: {
                'Content-Type': 'appliation/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(console.log('team form post worked'))
    }

    render() {
        return (
            <div>
                <h1>Add Your Team</h1>
            <form className="form" onSubmit={this.handleSubmit}>
                <label>
                    Team Name: <input type="text" name="team_name" value={this.state.team_name} onChange={this.handleChange} />
                </label>
                <label>
                    Logo: <input type="file" name="logo" value={this.state.logo} onChange={this.handleChange} />
                </label>
                <label>
                    Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
            </form>
            </div>
            
        )
    }
}