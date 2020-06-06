import React from 'react';

import ScattCard from '../../shared/ScattCard/ScattCard';

import scattData from '../../../helpers/data/scattData';
import authData from '../../../helpers/data/authData';


import './Home.scss';

class Home extends React.Component {
  state = {
    scatts: [],
  }

  getScatts = () => {
    const uid = authData.getUid();
    scattData.getScattsByUid(uid)
      .then((scatts) => this.setState({ scatts }))
      .catch((err) => console.error('unable to get scatts: ', err));
  }

  componentDidMount() {
    this.getScatts();
  }

  render() {
    const { scatts } = this.state;
    const buildScattCards = scatts.map((scatt) => (
      <ScattCard key={scatt.id} scatt={scatt}/>
    ));

    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="d-flex flex-wrap">
          {buildScattCards}
        </div>
      </div>
    );
  }
}

export default Home;
