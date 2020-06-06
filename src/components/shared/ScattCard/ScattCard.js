import React from 'react';

import scattShape from '../../../helpers/propz/scattShape';

import './ScattCard.scss';


class ScattCard extends React.Component {
  static propTypes = {
    scatt: scattShape.scattShape,
  }

  render() {
    const { scatt } = this.props;
    return (
      <div className="ScattCard col-3">
        <div className="card">
          <div className="card-body">
          <h5 className="card-title">{scatt.location}</h5>
          <p className="card-text">{scatt.notes}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default ScattCard;
