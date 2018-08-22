import React, { Component } from 'react';
import { View } from 'react-native';
import Routes from './src/Routes';
import firebase from 'firebase';


class App extends Component {

  initializeFirebase() {
    let config = {
      apiKey: "AIzaSyCoZqrtdE35elrBNGD6pdo13gGApegyZeA",
      authDomain: "incubadora-app.firebaseapp.com",
      databaseURL: "https://incubadora-app.firebaseio.com",
      projectId: "incubadora-app",
      storageBucket: "incubadora-app.appspot.com",
      messagingSenderId: "907532761491"
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    //this.initializeFirebase();
  }

  render() {
    return (
      <Routes />
    )
  }
}

export default App;