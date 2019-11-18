import React, { Component } from 'react';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      headshot: '',
      street: '',
      city: '',
      state: '',
      country: '',
      availability: '',
      min_hourly_rate: '',
      skills: '',
      headline: '',
      referred_by: '',
      references: '',
      referred_to: '',
      comments: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event, data) {
    event.preventDefault();
    alert('Thank you for your submission');
    fetch('http://localhost:8000/api/workers/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(console.log('worker form post worked'));
  }

  render() {
    return (
      <div>
        <h1>Complete Your Profile</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
          </label>
          <label>
            Headshot:
            <input
              type="file"
              name="headshot"
              value={this.state.headshot}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Street Address:
            <input
              type="text"
              name="street"
              value={this.state.street}
              onChange={this.handleChange}
            />
          </label>
          <label>
            City:
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" value={this.state.state} onChange={this.handleChange} />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Availability:
            <select
              name="availability"
              value={this.state.availability}
              onChange={this.handleChange}
            >
              <option value="FTR">Full-time, Regular hours</option>
              <option value="FTI">Full-time, Irregular hours (nights, weekends)</option>
              <option value="PTR">Part-time, Regular hours (most nights, weekends)</option>
              <option value="PTI">Part-time, Irregular hours (here and there)</option>
              <option value="NA">Not Currently Available, Just staying informed</option>
            </select>
          </label>
          <label>
            Minimum Hourly Rate:
            <input
              type="number"
              name="min_hourly_rate"
              value={this.state.min_hourly_rate}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Skills:
            <input
              type="textarea"
              name="skills"
              value={this.state.skills}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Your Headline:
            <input
              type="text"
              name="headline"
              value={this.state.headline}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Who Referred You to Coproductions?
            <input
              type="text"
              name="referred_by"
              value={this.state.referred_by}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Your References (with contact emails):
            <input
              type="text"
              name="references"
              value={this.state.references}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Your Recommended Workers or Teams:
            <input
              type="text"
              name="referred_to"
              value={this.state.referred_to}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Comments:
            <input
              type="text"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
            />
          </label>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ProfileForm;
