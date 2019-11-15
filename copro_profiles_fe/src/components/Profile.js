import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    fetch('https://coproductions-profiles.herokuapp.com/api/workers/1/', {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ profile: json });
      });
  }

  render() {
    return (
      <div>
        <h1>Profile for {this.state.profile.first_name}</h1>
      </div>
    );
  }
}

export default Profile;
