const mqtt = require('mqtt');
const adafruitConfig = require("../config/adafruit.config");
module.exports = () => {
    var client = mqtt.connect('mqtts://io.adafruit.com', {
        port: adafruitConfig.PORT,
        username: adafruitConfig.IO_USERNAME,
        password: adafruitConfig.IO_PASSWORD
    });

    var turn_light = true;

    client.on('connect', () => {
        client.publish(adafruitConfig.FEED_LED, 'OFF');
        // client.subscribe(adafruitConfig.FEED_LED, "OFF")
        console.log("Publish to " + adafruitConfig.FEED_LED);
    });

    client.on('error', (error) => {
        console.log('MQTT Client Errored');
        console.log(error);
    });

    client.on('message', function (topic, message) {
        console.log("Receive messages");
        if (topic == adafruitConfig.FEED_LED) {
            turn_light = (message.toString() === 'true');
        }
        console.log(message.toString()); // for demo purposes.
    });
}
