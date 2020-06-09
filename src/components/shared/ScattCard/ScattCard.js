import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import scattShape from '../../../helpers/propz/scattShape';

import './ScattCard.scss';


class ScattCard extends React.Component {
  static propTypes = {
    scatt: scattShape.scattShape,
    removeScatt: PropTypes.func.isRequired,
  }

  render() {
    const { scatt, removeScatt } = this.props;
    const singleLink = `/scatts/${scatt.id}`;
    const editLink = `/edit/${scatt.id}`;

    return (
      <div className="ScattCard col-3">
        <div className="card">
          <div className="card-body">
          <h5 className="card-title">{scatt.location}</h5>
          <Link className="btn btn-info m-1" to={singleLink}>View</Link>
          <Link className="btn btn-warning m-1" to={editLink}>Edit</Link>
          <button className="btn btn-danger m-1" onClick={() => removeScatt(scatt.id)}>Delete</button>
          <p className="card-text">{scatt.notes}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default ScattCard;
