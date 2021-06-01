import AsyncStorage from '@react-native-community/async-storage';
import {topicList} from './topics';
import messHandler from './messHandler';
import React, { Component } from 'react';
import convertRequest from './convertRequest';
import init from 'react_native_mqtt';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

class MQTT extends Component{

  constructor(){
    super();
    this.onMessageArrived = this.onMessageArrived.bind(this);
    this.onConnectionLost = this.onConnectionLost.bind(this);
    
    var clientID = "Client" + new Date().getTime();
    this.client = new Paho.MQTT.Client("io.adafruit.com", 80, clientID,);
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
    var message = entry.payloadString;
    console.log("onMessageArrived: " + message);
    this.handleMessage(entry.topic, message);
  }

  onConnect = () => {
    this.state.isConnected = true;
    console.log("Connected!!!");
    this.subscribeAllTopic();
    var data = 
   console.log(JSON.stringify(data));
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

  /**
   * @param lightId the 'key' of light
   * @param state 0: Off, 1: On
  */
  changeLight(lightId, state) {
    const data = {
      "key": String(lightId),
      "state": String(state),
    }
    this.sendPublishMessage("relay", data);
  }

  /**
   * @param type "relay" -> turn on/off light
   * @param data like the current format of data eg: {"key": ..., "name": ..., "url": ..., "state": ...}.
  */
  sendPublishMessage(type, data) {
    try {
      const message = convertRequest.convert(type, data);
      const topic = topicList.filter(topic => topic.search(type) != -1)[0];
      if (topic == []) {
        console.error("Cannot find topic!");
      } else {
        console.log(`Topic: ${topic}, message:`, message);
        this.publishMessage(topic, message);
      }
    } catch(e) {
      console.error(e);
    }
  }

  publishMessage(topic, msg){
    try{
      msg = JSON.stringify(msg);
      let message = new Paho.MQTT.Message(msg);
      message.destinationName = topic;
      this.client.send(message);
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
      topic = topic.split('/')[2]; // Get the part has 'bk-iot-light'
      switch(topic) {
        case 'bk-iot-button':       messHandler.handleButton(data); break;
        case 'bk-iot-relay':        messHandler.handleRelay(data); break;
        case 'bk-iot-temp-humid':   messHandler.handleTempHumid(data); break;
        case 'bk-iot-light':        messHandler.handleLight(data); break;
        case 'bk-iot-gas':          messHandler.handleGas(data); break;
        case 'bk-iot-magnetic':     messHandler.handleMagnetic(data); break;
      }
    } catch (e) {
      console.error(e);
    }
  }

  async subscribeAllTopic() {
    let list = new Promise((resolve, reject)=>resolve(topicList.map(topic => this.subscribeTopic(topic))));
    return list;
  }
}

export const mqtt = new MQTT();