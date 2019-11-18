import React, { Component } from 'react';
import hero from '../public/images/Hmpgmock_kids.jpg';

export class Welcome extends Component {
  render() {
    return (
      <div class="welcome_container">
        <h1>Ready for More Work?</h1>
        <p>
          Coproductions can help with that. We find clients that need marketing and digital services
          and aren't well served by the big-agency model. We scope the project, define the goals and
          requirements, and give you the opportunity to bid.
        </p>
        <img className="hero_img" src={hero} />
      </div>
    );
  }
}

export default Welcome;
