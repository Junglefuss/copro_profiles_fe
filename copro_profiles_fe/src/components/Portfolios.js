import React, { Component } from 'react';

export class Portfolios extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     portfolios: {}
  //   };
  // }

  // componentDidMount() {
  //   fetch('http://localhost:8000/api/worker_links/1/');
  // }

  render() {
    console.log(this.props);

    return <div>{this.props.label}</div>;
  }
}

export default Portfolios;
