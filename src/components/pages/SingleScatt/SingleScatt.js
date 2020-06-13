import React from 'react';
import { Link } from 'react-router-dom';

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
    const { scattId } = this.props.match.params;
    const editLink = `/edit/${scattId}`;
    return (
      <div className="SingleScatt m-2 p-4 rounded text-left" style={{ backgroundColor: scatt.color }}>
        <h1 className='text-center'>{scatt.location}</h1>
        <p>Color: {scatt.color}</p>
        <p>Shape: {scatt.shape}</p>
        <p>Size: {scatt.size}</p>
        <p>Temperature: {scatt.temperature}</p>
        <p>Viscosity: {scatt.viscosity}</p>
        <p>Notes: {scatt.notes}</p>
        <p>Was it fulfilling? { scatt.wasFulfilling ? 'Yes' : 'No' }</p>
        <button className="btn btn-danger m-2" onClick={this.removeScatt}>Delete</button>
        <Link className="btn btn-warning m-2" to={editLink}>Edit</Link>
      </div>
    );
  }
}

export default SingleScatt;
