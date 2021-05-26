import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { render } from 'react-dom';
import styles from '../style/mqtt';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
 } from 'react-native';

export default class MQTT extends Component{

  constructor(){
    super();
    this.onMessageArrived = this.onMessageArrived.bind(this)
    this.onConnectionLost = this.onConnectionLost.bind(this)

    const client = new Paho.MQTT.Client("io.adafruit.com", 80, 'smartHomeApp',);
    client.onMessageArrived = this.onMessageArrived;
    client.onConnectionLost = this.onConnectionLost;

    const options = { 
      onSuccess: this.onConnect,
      useSSL: false ,
      userName: 'nhkhang',
      password: 'aio_mqRW49GV7WWijaWc2gK4g5fVcrMl',
      onFailure: (e) => {console.log("Here is the error: " , e); }
    }
    client.connect(options);

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
    this.setState({isConnected: true, ersror: ''})
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
      this.state.client.connect(options)
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

  render(){
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native MQTT!
        </Text>
        <Text style={{color: 'red'}}>
          {this.state.error}
        </Text>
        { this.state.isConnected ?
            <Text style={{color: 'green'}}>
              State: Connected
            </Text> : null
        }
        
        <View>
          <Text>Subscribe to topic: </Text>
          <TextInput
            value={this.state.topic} 
            onChangeText={(value => this.setState({topic: value}))} 
            placeholder="Topic..."
            style={styles.input} />
          <Button onPress={this.subscribeTopic.bind(this) } title="Subscribe" />
  
          <Text style={styles.instructions}>
            Message received: {this.state.message.join('')}
          </Text>
        </View>
  
        <View>
          <Text>Publish to topic: </Text>
          <TextInput
            value={this.state.topic} 
            onChangeText={(value => this.setState({topic: value}))} 
            placeholder="Topic..."
            style={styles.input} />
          <Text>Message send: </Text>
          <TextInput
            value={this.state.messageToSend} 
            onChangeText={(value => this.setState({messageToSend: value}))} 
            placeholder="Message..."
            style={styles.input} />
          <Button onPress={this.sendMessage.bind(this) } title="Send Message" />
        </View>
      </View>
    );
  }
}


