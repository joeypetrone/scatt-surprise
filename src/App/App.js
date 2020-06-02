import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

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
        <h1 className="mt-3">Scatt Surprise React App</h1>
        <Auth />
      </div>
    );
  }
}

export default App;
