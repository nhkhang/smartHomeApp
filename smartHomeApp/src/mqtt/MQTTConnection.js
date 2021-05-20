import init from 'react_native_mqtt';
import uuid from 'react-native-uuid';
import {AsyncStorage} from "react-native";

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync : {}
});

const defaultConnectOptions = {
    reconnect: false,
    cleanSession: true,
    mqttVersion: 3,
    keepAliveInterval: 60,
    timeout: 60
}
  
export default class MQTTConnection {
    constructor(){
        this.mqtt = null;
        this.QQS = 0;
        this.RETAIN = true;
    }

    connect(host, port, options=null) {
        if (options) {
            this.QQS = options.qos;
            this.RETAIN = options.retain;
        }

        let currentTime = new Date();
        let clientID = currentTime + uuid.v1();
        clientID = clientID.slice(0, 23);
        console.log('clientID: ', clientID)

        this.mqtt = new Paho.MQTT.Client(host, port, clientID);
        this.mqtt.onConnectionLost = (res) => {
            this.onMQTTLost;
        };
        this.mqtt.onMessageArrived = (message) => {
            this.onMQTTMessageArrived(message);
        }
        this.mqtt.onMessageDelivered = (message) => {
            this.onMQTTMessageDelivered(messgae);
        }

        const connectionOptions = options ? options : defaultConnectOptions;

        this.mqtt.connect({
            onSuccess: this.onMQTTConnect,
            onFailure: this.onMQTTLost,
            ... connectionOptions
        });
    }

    onMQTTSuccess = () => {
        this.onMQTTConnect();
    }

    onMQTTFailure = () => {
        this.onMQTTLost();
    }

    subscribeChannel(channel) {
        console.log("MQTTConnection subscribeChannel: ", channel);
        if (!this.mqtt || !this.mqtt.isConnected()){
            return;
        }
        this.mqtt.subscribe(channel, this.QQS);
    }

    unsubscribeChannel(channel) {
        console.log("MQTTConnection unsubscribeChannel: ", channel)
        if (!this.mqtt || !this.mqtt.isConnected()){
            return;
        }
        this.mqtt.unsubscribe(channel);
    }

    send(channel = null, payload){
        console.log("MQTTConnection send: ")
        if (!this.mqtt || !this.mqtt.isConnected()){
            return;
        }
        if (!channel || !payload) {
            return false;
        }
        console.log(`MQTTConnection send publish channel: ${channel}, payload: ${payload}, qqs: ${qqs}, retain ${retain}`);
        this.mqtt.publish(channel, payload, this.QQS, this.RETAIN);
    }

    close() {
        this.mqtt && this.mqtt.disconnect;
        this.mqtt = null;
    }
}

MQTTConnection.prototype.onMQTTConnect = null;
MQTTConnection.prototype.onMQTTLost = null;
MQTTConnection.prototype.onMQTTMessageArrived = null;
MQTTConnection.prototype.onMQTTMessageDelivered = null;
//   function onConnect() {
//     console.log("onConnect");
//   }
  
//   function onConnectionLost(responseObject) {
//     if (responseObject.errorCode !== 0) {
//       console.log("onConnectionLost:"+responseObject.errorMessage);
//     }
//   }
  
//   function onMessageArrived(message) {
//     console.log("onMessageArrived:"+message.payloadString);
//   }
  
//   const client = new Paho.MQTT.Client('iot.eclipse.org', 443, 'uname');
//   client.onConnectionLost = onConnectionLost;
//   client.onMessageArrived = onMessageArrived;
//   client.connect({ onSuccess:onConnect, useSSL: true });