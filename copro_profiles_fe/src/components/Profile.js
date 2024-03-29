import React, { Component } from 'react';
import Portfolios from './Portfolios';
import Teams from './Teams';
import Connections from './Connections';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      profile: {}
    };
  }

  componentDidMount() {
    console.log(this.state.user_id);
    let id = this.state.user_id;
    fetch(`http://localhost:8000/api/workers/${id}/`, {
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
    console.log(this.props);
    return (
      <div>
        <h1>Your Profile</h1>
        <div className="profile">
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
            <Portfolios worker_links={this.state.profile.worker_links} />
            <h2>Teams:</h2>
            <div>
              <Teams user_id={this.props.user_id} />
            </div>
            <h2>Connections:</h2>
            <div>
              <Connections connections={this.state.profile.connections} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
