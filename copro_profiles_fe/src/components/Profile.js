import React, { Component } from 'react';
import Portfolios from './Portfolios';
import Teams from './Teams';
import Connections from './Connections';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/workers/1/', {
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
    console.log(this.state.profile);

    return (
      <div>
        <h1>Your Profile</h1>
        <div class="profile">
          <div className="column-1">
            <img
              src={this.state.profile.headshot}
              alt={
                'Headshot for ' + this.state.profile.first_name + ' ' + this.state.profile.last_name
              }
            />
            <h2>Contact Info:</h2>
            <div>{this.state.profile.email}</div>
            <div>{this.state.profile.phone}</div>
          </div>
          <div className="column-2">
            <h1>
              {this.state.profile.first_name} {this.state.profile.last_name}
            </h1>
            <h3>
              {this.state.profile.city}, {this.state.profile.state}
            </h3>
            <h2>Skills:</h2>
            <div>{this.state.profile.skills}</div>
            <h2>Portfolio & Resume Websites:</h2>

            <h2>Teams:</h2>
            <div>
              <Teams />
            </div>
            <h2>Connections:</h2>
            <div>
              <Connections />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
