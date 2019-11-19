import React, { Component } from 'react';

export class Portfolios extends Component {
  constructor() {
    super();
    this.state = {
      user_id: 1,
      portfolios: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/workers/1/', {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      // .then(res => console.log(res))
      // .then(json => {
      //   this.setState({ portfolios: json.worker_links });
      // })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    // console.log(this.props);

    return (
      <div>
        <h3>Portfolios</h3>
      </div>
    );
  }
}

export default Portfolios;
