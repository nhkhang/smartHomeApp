const mqtt = require('mqtt'); 
const adafruitConfig = require("../config/adafruit.config");
module.exports = () => {
    var client = mqtt.connect('mqtts://io.adafruit.com', {
        port: adafruitConfig.PORT,
        username: adafruitConfig.IO_USERNAME,
        password: adafruitConfig.IO_PASSWORD
    });

    var turn_light = false;

    client.on('connect', () => {
        // client.publish(adafruitConfig.FEED_LED, 'OFF');
        client.subscribe(adafruitConfig.FEED_LED);
        console.log("Subscribed to topic: " + adafruitConfig.FEED_LED);
    });

    client.on('error', (error) => {
        console.log('MQTT Client Error!');
        console.log(error);
    });

    client.on('message', function (topic, message) {
        if (topic == adafruitConfig.FEED_LED) {
            turn_light = (message.toString() === 'ON');
        }
        console.log("Receive messages: " + message.toString()); // for demo purposes.
    });

    return client;
}
