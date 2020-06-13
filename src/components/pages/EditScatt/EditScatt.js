import React from 'react';

import authData from '../../../helpers/data/authData';
import scattData from '../../../helpers/data/scattData';

import './EditScatt.scss';

class EditScatt extends React.Component {
  state = {
    scattLocation: '',
    scattColor: '',
    scattShape: '',
    scattSize: '',
    scattTemperature: 0,
    scattViscosity: '',
    scattWasFulfilling: false,
    scattNotes: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.scattId;
    scattData.getSingleScatt(editId)
      .then((response) => {
        const scatt = response.data;
        this.setState({
          scattLocation: scatt.location,
          scattColor: scatt.color,
          scattShape: scatt.shape,
          scattSize: scatt.size,
          scattTemperature: scatt.temperature,
          scattViscosity: scatt.viscosity,
          scattWasFulfilling: scatt.wasFulfilling,
          scattNotes: scatt.notes,
        });
      })
      .catch((err) => console.error('unable to get scatt to edit: ', err));
  }

  locationChange = (e) => {
    e.preventDefault();
    this.setState({ scattLocation: e.target.value });
  }

  colorChange = (e) => {
    e.preventDefault();
    this.setState({ scattColor: e.target.value });
  }

  shapeChange = (e) => {
    e.preventDefault();
    this.setState({ scattShape: e.target.value });
  }

  sizeChange = (e) => {
    e.preventDefault();
    this.setState({ scattSize: e.target.value });
  }

  temperatureChange = (e) => {
    this.setState({ scattTemperature: e.target.value });
  }

  viscosityChange = (e) => {
    e.preventDefault();
    this.setState({ scattViscosity: e.target.value });
  }

  notesChange = (e) => {
    e.preventDefault();
    this.setState({ scattNotes: e.target.value });
  }

  wasFulfillingChange = (e) => {
    this.setState({ scattWasFulfilling: e.target.checked });
  }

  updateScatt = (e) => {
    e.preventDefault();
    const { scattId } = this.props.match.params;
    const {
      scattLocation,
      scattColor,
      scattShape,
      scattSize,
      scattTemperature,
      scattViscosity,
      scattWasFulfilling,
      scattNotes,
    } = this.state;
    const updatedScatt = {
      color: scattColor,
      shape: scattShape,
      size: scattSize,
      temperature: scattTemperature * 1,
      viscosity: scattViscosity,
      wasFulfilling: scattWasFulfilling,
      location: scattLocation,
      notes: scattNotes,
      uid: authData.getUid(),
    };
    scattData.putScatt(scattId, updatedScatt)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save scat:', err));
  }

  render() {
    const {
      scattLocation,
      scattColor,
      scattShape,
      scattSize,
      scattTemperature,
      scattViscosity,
      scattWasFulfilling,
      scattNotes,
    } = this.state;

    return (
      <div className="EditScatt col-12">
        <h1>Edit Scatt</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="scatt-location">Location</label>
            <input
              type="text"
              className="form-control"
              id="scatt-location"
              value={scattLocation}
              onChange={this.locationChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scatt-color">Color</label>
            <input
              type="text"
              className="form-control"
              id="scatt-color"
              value={scattColor}
              onChange={this.colorChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scatt-shape">Shape</label>
            <input
              type="text"
              className="form-control"
              id="scatt-shape"
              value={scattShape}
              onChange={this.shapeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scatt-size">Size</label>
            <input
              type="text"
              className="form-control"
              id="scatt-size"
              value={scattSize}
              onChange={this.sizeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scatt-temperature">Temperature</label>
            <input
              type="number"
              className="form-control"
              id="scatt-temperature"
              value={scattTemperature}
              onChange={this.temperatureChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scatt-viscosity">Viscosity</label>
            <input
              type="text"
              className="form-control"
              id="scatt-viscosity"
              value={scattViscosity}
              onChange={this.viscosityChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scatt-notes">Notes</label>
            <input
              type="text"
              className="form-control"
              id="scatt-notes"
              value={scattNotes}
              onChange={this.notesChange}
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="scatt-wasFulfilling"
              checked={scattWasFulfilling}
              onChange={this.wasFulfillingChange}
              />
            <label className="form-check-label" htmlFor="scatt-wasFulfilling">Was it fulfilling?</label>
          </div>
          <button className="btn btn-primary" onClick={this.updateScatt}>Update Scat</button>
        </form>
      </div>
    );
  }
}

export default EditScatt;
