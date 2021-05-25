import AsyncStorage from '@react-native-community/async-storage';
import topicList from './topics';
// import mqtt from 'mqtt';
export default class MQTT {
  constructor() {
    var mqtt = require('mqtt');
    this.client  = mqtt.connect('http://io.adafruit.com', {
      port: 80,
      username: 'nhkhang',
      password: 'aio_aCEU51nRq9kMPpLAYqHVyncIA7jU'
    });

    this.state = {
      isConnected: false
    }

    this.client.on('connect', () => {
      console.log("CONNECT!");
      this.onConnect();
    })
  }

  onConnect() {
    this.state.isConnected = true;
    this.subscribeAllTopic();

    this.client.on('message', (topic, message) => {
      // message is Buffer
      console.log(message.toString());
      this.client.end();
    })
  }

  subscribeTopic(topic, data) {
    try {
      if (this.state.isConnected) {
        this.client.subscribe(topic, (e) => {
          if (!e) console.log("Done: Subscribe topic ", topic) 
          else    console.error(e);
        });
      } else {
        throw new Error("State is not connected");
      }
    } catch(e) {
      console.error(e);
    }
  }

  subscribeAllTopic() {
    topicList.map(topic => this.subscribeTopic(topic));
    console.log("Done: subscribe all topic!");
  }  
}