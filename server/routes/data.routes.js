const initMQTT = require('../mqtt');
const adafruitConfig = require("../config/adafruit.config");

module.exports.light = async (req, res) => {
    const mqtt = initMQTT();
    const message = req.body;
    var turn_light;
    switch(message.data){
        case "0":
            turn_light = "OFF";
            break;
        case "1":
            turn_light = "ON";
            break;
        default:
            console.log("Invalid data");
    }
    mqtt.publish(adafruitConfig.FEED_LED, turn_light);
    console.log("Published the message: ")
    console.log(message);
    res.send("OK");
    res.end();
}