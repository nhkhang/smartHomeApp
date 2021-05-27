import AsyncStorage from '@react-native-community/async-storage';
import {topicList} from './topics';
import messHandler from './messHandler';
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
      console.log(`${message.toString()} from ${topic}`);
      this.handleMessage(topic, message);
      this.client.end();
    })
  }

  handleMessage(topic, message) {
    try {
      topic = topic.split('/')[2]; // Get the part has 'bk=iot-ligth'
      let data = JSON.parse(message);
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
    const str1 = 'aio_mqRW';
    const str2 = '49GV7WWi';
    const str3 = 'jaWc2gK4g';
    const str4 = '5fVcrMl';
    return str1 + str2 + str3 + str4;
  }
}