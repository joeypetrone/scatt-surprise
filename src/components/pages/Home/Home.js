import React from 'react';

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
      </div>
    );
  }
}

export default Home;
