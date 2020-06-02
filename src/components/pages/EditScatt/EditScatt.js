import React from 'react';

import './EditScatt.scss';

class EditScatt extends React.Component {
  render() {
    const editId = this.props.match.params.scattId;
    return (
      <div className="EditScatt">
        <h1>Edit Scatt</h1>
        <h2>The Scatt id is {editId}</h2>
      </div>
    );
  }
}

export default EditScatt;
