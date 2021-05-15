const initMQTT = require('../mqtt');
const adafruitConfig = require("../config/adafruit.config");
const utils = require("./utils");
const mqtt = initMQTT();

module.exports.light = async (req, res) => {
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
    // let msg = {
    //     "data": turn_light,
    //     "name": "LED"
    // }
    mqtt.publish(adafruitConfig.FEED_LED, JSON.stringify(message));
    console.log("Published the message: ")
    console.log(message);
    res.send("OK");
    res.end();
}

module.exports.lightAlarm = async (req, res) => {
    const data = req.body;
    let alarmDate = data.alarmDate;
    console.log(alarmDate);
    let timeLeft = utils.calculateTimeLeft(alarmDate) * 1000;
    setTimeout(function() {
        let msg = {
            "data": data.mode,
            "name": "LED"
        }
        mqtt.publish(adafruitConfig.FEED_LED, JSON.stringify(msg));
    }, timeLeft);
    res.send("OK");
    res.end();
}