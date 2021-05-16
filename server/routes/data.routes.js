const initMQTT = require('../mqtt');
const adafruitConfig = require("../config/adafruit.config");

module.exports.led = async (req, res) => {
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
    console.log("Published the message: ");
    console.log(message);
    res.send("OK");
    res.end();
}

//thu thap thong tin phong sang hay tat
topic = NPNLab_BBC/feeds/bk-iot-light
module.exports.light = async (req, res) => {
    const mqtt = initMQTT();
    mqtt.subscribe(adafruitConfig.FEED_LIGHT);
    client.on('message',function(topic, message, packet){
        message = message.toString();
        console.log("message is "+ message);
        console.log("topic is "+ topic);
        res = packet;
    });
}

// thu thap nhiet do, do am
// topic = NPNLab_BBC/feeds/bk-iot-temp-humid
module.exports.humidity_temp = async (req, res) => {
    const mqtt = initMQTT();
    mqtt.subscribe(adafruitConfig.FEED_HUMIDITY_TEMP);
    client.on('message', function(topic, message, packet){
        message = message.toString();
        console.log("message is " + message);
        console.log("topic is " + topic);
        res = packet;
    });
}

// phat hien mo cua
// topic = NPNLab_BBC/feeds/bk-iot-magnetic
module.exports.magnetic = async (req, res) => {
    const mqtt = initMQTT();
    mqtt.subscribe(adafruitConfig.FEED_MAGNETIC);
    client.on('messgae', function(topic, messgae, packet){
        message = message.toString();
        console.log("message is " + messgae);
        console.log("topic is " + topic);
        res = packet;
    });
}

// cam bien hong ngoai nhan biet vat can tro
// topic = PNLab_BBC/feeds/bk-iot-infrared
module.exports.infrared = async (req, res) => {
    const mqtt = initMQTT();
    mqtt.subscribe(adafruitConfig.FEED_INFRARED);
    client.on('messgae', function(topic, messgae, packet){
        message = message.toString();
        console.log("message is " + messgae);
        console.log("topic is " + topic);
        res = packet;
    });
}

// cam bien khi gas
// topic = NPNLab_BBC/feeds/bk-iot-gas
module.exports.gas = async (req, res) => {
    const mqtt = initMQTT();
    mqtt.subscribe(adafruitConfig.FEED_GAS);
    client.on('messgae', function(topic, messgae, packet){
        message = message.toString();
        console.log("message is " + messgae);
        console.log("topic is " + topic);
        res = packet;
    });
}