import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import NewScatt from '../components/pages/NewScatt/NewScatt';
import SingleScatt from '../components/pages/SingleScatt/SingleScatt';
import Home from '../components/pages/Home/Home';
import EditScatt from '../components/pages/EditScatt/EditScatt';

import fdConnection from '../helpers/data/connection';


fdConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount = () => {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <h1 className="mt-3">Scatt Surprise</h1>
        <Auth />
        <EditScatt />
        <Home />
        <NewScatt />
        <SingleScatt />
      </div>
    );
  }
}

export default App;
