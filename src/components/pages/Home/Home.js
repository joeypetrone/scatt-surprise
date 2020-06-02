import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scattId = 'monkeyButt67';
    this.props.history.push(`/edit/${scattId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit a thing</button>
        <Link to='/scatts/scatt12345'>View Single</Link>
        <Link to='/scatts/new'>New Scatt</Link>
      </div>
    );
  }
}

export default Home;
