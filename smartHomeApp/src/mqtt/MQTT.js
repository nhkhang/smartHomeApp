import AsyncStorage from '@react-native-community/async-storage';
import topicList from './topics';
// import mqtt from 'mqtt';
export default class MQTT {
  constructor() {
    var mqtt = require('mqtt');
    const pass = this.generatePassword();
    this.client  = mqtt.connect('http://io.adafruit.com', {
      port: 80,
      username: 'nhkhang',
      password: pass
    });

    this.state = {
      isConnected: false
    }

    this.client.on('connect', () => {
      console.log("CONNECT!");
      this.onConnect();
    });

    this.client.on('error', (error) => {
      console.log('MQTT Client Error!');
      console.log(error);
  });
  }

  onConnect() {
    this.state.isConnected = true;
    this.subscribeAllTopic()
    .then(
      (response) => {
        console.log("Done: Subscribe all topics");
      },
      (error) => {
        console.error(error);
      }
    );

    this.client.on('message', (topic, message) => {
      // message is Buffer
      console.log(message.toString());
      this.client.end();
    })
  }

  subscribeTopic(topic, data) {
    try {
      this.client.subscribe(topic, (e) => {
        if (!e) {console.log("Done: Subscribe topic ", topic); return topic;} 
        else    console.error(e);
      });
    } catch(e) {
      console.error(e);
    }
  }

  async subscribeAllTopic() {
    let list = new Promise((solve, reject)=>solve(topicList.map(topic => this.subscribeTopic(topic))));
    return list;
  }

  generatePassword() {
    // 'aio_ZXev69q2MQp0uPAmhVRBSTv3uERs'
    str1 = 'aio_ZXev';
    str2 = '69q2MQp0u';
    str3 = 'PAmhVRBS';
    str4 = 'Tv3uERs';
    return str1 + str2 + str3 + str4;
  }
}