import AsyncStorage from '@react-native-community/async-storage';
import topicList from './topics';
// import mqtt from 'mqtt';
export default class MQTT {
  constructor() {
    var mqtt = require('mqtt');
    this.client  = mqtt.connect('mqtts://io.adafruit.com', {
      clientId: 'smartHomeApp',
      username: 'nhkhang',
      password: "aio_mqRW49GV7WWijaWc2gK4g5fVcrMl"
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

  subscribeTopic(topic) {
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
    str1 = 'aio_mqRW';
    str2 = '49GV7WWi';
    str3 = 'jaWc2gK4g';
    str4 = '5fVcrMl';
    return str1 + str2 + str3 + str4;
  }
}