import React, { Component } from 'react';

export default class PortfolioForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            worker = this.props.user,
            label = '',
            url = '',
            screenshot = ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event, data) {
        event.preventDefault();
        fetch('http://localhost:8000/api/worker_links/', {
            method: 'POST',
            headers: {
                'Content-Type': 'appliation/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(console.log('worker link form post worked'))
    }

    render() {
        return (
            <div className="form">
                <h1>Add a Resume or Portfolio Site</h1>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Link URL: <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
                </label>
                <label>
                    Link Label: <input type="text" name="label" value={this.state.label} onChange={this.handleChange} />
                </label>
                <label>
                    Screenshot: <input type="file" name="screenshot" value={this.state.screenshot} onChange={this.handleChange} />
                </label>
            </form>
            </div>
            
        )
    }
}