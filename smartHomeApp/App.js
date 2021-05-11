import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen';
import AuthLoadingScreen from './screens/authLoadingScreen';
import AppContainer from './routers';

const App = () =>{
  return(
    <LoginScreen/>
  );
};

export default App;