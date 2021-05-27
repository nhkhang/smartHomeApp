import AsyncStorage from '@react-native-community/async-storage';
import {topicList} from './topics';
import messHandler from './messHandler';
import React, { Component } from 'react';

export default class MQTT extends Component{

  constructor(){
    super();
    this.onMessageArrived = this.onMessageArrived.bind(this)
    this.onConnectionLost = this.onConnectionLost.bind(this)
    
    this.client = new Paho.MQTT.Client("io.adafruit.com", 80, 'smartHomeApp',);
    this.client.onMessageArrived = this.onMessageArrived;
    this.client.onConnectionLost = this.onConnectionLost;

    this.state = {
      isConnected: false,
    };

    this.connect();
  }

  connect = () => {
    const options = { 
      onSuccess: this.onConnect,
      useSSL: false ,
      userName: 'nhkhang',
      password: 'aio_YGcn64qyrXaV' + 'DgAimW3kFitHmf3J',
      onFailure: (e) => {console.log("Here is the error: " , e); }
    }
    this.client.connect(options);
  }

  onMessageArrived(entry) {
    console.log("onMessageArrived: "+ entry.payloadString);
    this.handleMessage(entry.topic, entry.padloadString);
  }

  onConnect = () => {
    this.state.isConnected = true;
    console.log("Connected!!!");
    this.subscribeAllTopic();
  };

  subscribeTopic(topic) {
    try {
      if (this.client.isConnected){
        this.client.subscribe(topic, 
          {onSuccess: () => (console.log("Done: Subscribed to topic: " + topic)),
          onFailure: (e) => (console.log(e))});
      }
      else{
        this.connect();
      }
    } catch(e) {
      console.error(e);
    }
  }

  publishMessage(topic, msg){
    try{
      let message = new Paho.MQTT.Message(msg);
      message.destinationName = topic;
      if (this.state.isConnected){    
        this.client.send(message);
        console.log("Message sent: " + message.payloadString);   
      }
      else{
        this.connect();
      }
    }
    catch(e){
      console.log(e);
    }
  }

  onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
      this.state.isConnected = false;
    }
  }

  handleMessage(topic, data) {
    try {
      topic = topic.split('/')[2]; // Get the part has 'bk=iot-ligth'
      switch(topic) {
        case 'bk-iot-led':      messHandler.handleLed(data); break;
        case 'bk-iot-humid':    messHandler.handleHumid(data); break;
        case 'bk-iot-light':    messHandler.handleLight(data); break;
        case 'bk-iot-gas':      messHandler.handleGas(data); break;
        case 'bk-iot-magnetic': messHandler.handleMagnetic(data); break;
      }
    } catch (e) {
      console.error(e);
    }
  }

  async subscribeAllTopic() {
    let list = new Promise((resolve, reject)=>resolve(topicList.map(topic => this.subscribeTopic(topic))));
    return list;
  }

  generatePassword() {
    const str1 = 'aio_mqRW';
    const str2 = '49GV7WWi';
    const str3 = 'jaWc2gK4g';
    const str4 = '5fVcrMl';
    return str1 + str2 + str3 + str4;
  }
}