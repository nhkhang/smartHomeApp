import React, { Component } from 'react';
import init from 'react_native_mqtt';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
 } from 'react-native';
 import AsyncStorage from '@react-native-community/async-storage';


init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});


export default class MQTT {

  constructor(){
    super();
    this.onMessageArrived = this.onMessageArrived.bind(this)
    this.onConnectionLost = this.onConnectionLost.bind(this)


    const client = new Paho.MQTT.Client("io.adafruit.com", 80, 'someClientID',);
    client.onMessageArrived = this.onMessageArrived;
    client.onConnectionLost = this.onConnectionLost;
    client.connect({ 
      onSuccess: this.onConnect,
      useSSL: false ,
      userName: 'nhkhang',
      password: 'aio_EMsV874aTTl0E7r60qHu20EGhZL9',
      onFailure: (e) => {console.log("Here is the error: " , e); }

    });

    this.state = {
      message: [''],
      topic: '',
      client,
      messageToSend:'',
      isConnected: false,
    };
  }

  onMessageArrived(entry) {
    console.log("onMessageArrived: "+ entry.payloadString);
    this.setState({message: [...this.state.message, entry.payloadString]});
  }

  onConnect = () => {
    this.setState({isConnected: true, error: ''})
    console.log("Connected!!!");
  };

  subscribeTopic(){
    const { client } = this.state;
    console.log("Subscribe to topic: " + this.state.topic);
    client.subscribe(this.state.topic);
  }

  sendMessage(){
    let message = new Paho.MQTT.Message(this.state.messageToSend);
    message.destinationName = this.state.topic;

    if(this.state.isConnected){
      this.state.client.send(message);    
      console.log("Message sent: " + message.payloadString);
    }
    else{
      this.connect(this.state.client)
      .then(() => {
        this.state.client.send(message);
        this.setState({error: '', isConnected: true});
      })
      .catch((error)=> {
        console.log(error);
        this.setState({error: error});
      });
    }
  }

  onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
      this.setState({error: 'Lost Connection', isConnected: false});
    }
  }
}