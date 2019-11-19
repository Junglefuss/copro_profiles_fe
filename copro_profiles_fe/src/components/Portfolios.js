import React, { Component } from 'react';

export class Portfolios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1,
      portfolios: []
    };
  }

  // componentDidMount() {
  //   fetch('http://localhost:8000/api/workers/1/', {
  //     headers: {
  //       Authorization: `JWT ${localStorage.getItem('token')}`
  //     }
  //   })
  //     .then(res => res.json())
  //     // .then(res => console.log(res))
  //     // .then(json => {
  //     //   this.setState({ portfolios: json.worker_links });
  //     // })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  render() {
    console.log(this.props);

    // let list = this.props.worker_links.map(link => {
    //   return (
    //     <div>
    //       <h3 key={link.id}>{link.label}</h3>
    //       <a href={link.url}>
    //         <img src={link.screenshot} />
    //       </a>
    //     </div>
    //   );
    // });
    return (
      <div>
        <h2>Portfolio & Resume Websites:</h2>
        <ul>{/* <li>{list}</li> */}</ul>
      </div>
    );
  }
}

export default Portfolios;
