import React from 'react';

import './SingleScatt.scss';
import scattData from '../../../helpers/data/scattData';

class SingleScatt extends React.Component {
  state = {
    scatt: {},
  }

  componentDidMount() {
    const { scattId } = this.props.match.params;
    scattData.getSingleScatt(scattId)
      .then((response) => this.setState({ scatt: response.data }))
      .catch((err) => console.error('unable to get single scatt: ', err));
  }

  removeScatt = () => {
    const { scattId } = this.props.match.params;
    scattData.deleteScatt(scattId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete scatt in single view: ', err));
  }

  render() {
    const { scatt } = this.state;
    return (
      <div className="SingleScatt" style={{ backgroundColor: scatt.color }}>
        <h1>{scatt.location}</h1>
        <p>Color: {scatt.color}</p>
        <p>Shape: {scatt.shape}</p>
        <p>Size: {scatt.size}</p>
        <p>Temperature: {scatt.temperature}</p>
        <p>Viscosity: {scatt.viscosity}</p>
        <p>Notes: {scatt.notes}</p>
        <p>Was it fulfilling? { scatt.wasFulfilling ? 'Yes' : 'No' }</p>
        <button className="btn btn-danger" onClick={this.removeScatt}>Delete</button>
      </div>
    );
  }
}

export default SingleScatt;
