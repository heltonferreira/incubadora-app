import React, { Component } from 'react';
import { View } from 'react-native';
import Routes from './src/Routes';
import firebase from 'firebase';


class App extends Component {

  initializeFirebase() {
    let config = {
      apiKey: "AIzaSyBLwMSdO1R0klFfHMYVrGL6QZfj4Ol4sCo",
      authDomain: "react-native-incubadora-app.firebaseapp.com",
      databaseURL: "https://react-native-incubadora-app.firebaseio.com",
      projectId: "react-native-incubadora-app",
      storageBucket: "react-native-incubadora-app.appspot.com",
      messagingSenderId: "246616666657"
    };
    return Promise.all(firebase.initializeApp(config));
  }

  async componentDidMount() {
    await this.initializeFirebase();
  }

  render() {
    return(
        <Routes />
    ) 
  }
}

export default App;