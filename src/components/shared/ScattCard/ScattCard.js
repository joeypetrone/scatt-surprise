import React from 'react';

import './ScattCard.scss';

class ScattCard extends React.Component {
  render() {
    const { scatt } = this.props;
    return (
      <div className="ScattCard">
        {scatt.location}
      </div>
    );
  }
}

export default ScattCard;
