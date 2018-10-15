import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import { LoginForm } from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDtRzEfVsPxdO_DnfO0AdD7tqnp9p-StAo",
      authDomain: "authentication-54fd2.firebaseapp.com",
      databaseURL: "https://authentication-54fd2.firebaseio.com",
      projectId: "authentication-54fd2",
      storageBucket: "authentication-54fd2.appspot.com",
      messagingSenderId: "628608112671"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
