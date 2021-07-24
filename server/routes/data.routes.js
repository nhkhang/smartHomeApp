const Relay = require('../model/Relay');

module.exports.relay = (req, res) => {
    // var message = req.body;
    // console.log(JSON.stringify(message));
    // res.send(JSON.stringify({status: "OK"}));
    // res.end();
}

// module.exports.light = (req, res) => {
//     const data = req.body;
//     res.send(JSON.stringify({status: "Successful"}));
//     res.end();
// }

// module.exports.gas = (req, res) => {
//     const data = req.body;
//     res.send(JSON.stringify({status: "Successful"}));
//     res.end();
// }

// module.exports.magnetic = (req, res) => {
//     const data = req.body;
//     res.send(JSON.stringify({status: "Successful"}));
//     res.end();
// }

// module.exports.temp_humid = (req, res) => {
//     const data = req.body;
//     res.send(JSON.stringify({status: "Successful"}));
//     res.end();
// }































// const initMQTT = require('../mqtt');
// const adafruitConfig = require("../config/adafruit.config");
// const utils = require("./utils");
// const mqtt = initMQTT();

// function subscribeToTopic(topic){
//     mqtt.subscribe(topic);
//     console.log("Subscribed to topic: " + topic);
// }

// function sendDataMQTT(topic, message){
//     mqtt.publish(topic, JSON.stringify(message));
//     console.log("Published the message: ");
//     console.log(message)
// }

// module.exports.light = async (req, res) => {
//     const message = req.body;
//     sendDataMQTT(adafruitConfig.FEED_LED, message);
//     res.send(JSON.stringify({status: "Successful"}));
//     res.end();
// }

// module.exports.gas = async (req, res) => {
//     subscribeToTopic(adafruitConfig.FEED_GAS);
    
//     var gas_leak = false;
    
//     mqtt.on('message', function (topic, message) {
//         gas_leak = JSON.parse(message.toString()).data == 1;
//         console.log("Gas leak!");
//         console.log("Receive messages: " + message.toString()); // for demo purposes.
//         res.send(JSON.stringify({status: "Gas leak!"}));
//         res.end();
//     });
// }

// module.exports.lightAlarm = async (req, res) => {
//     const data = req.body;
//     let alarmDate = data.alarmDate;
//     console.log(alarmDate);
//     let timeLeft = utils.calculateTimeLeft(alarmDate) * 1000;
//     setTimeout(function() {
//         let msg = {
//             "data": data.mode,
//             "name": "LED"
//         }
//         mqtt.publish(adafruitConfig.FEED_LED, JSON.stringify(msg));
//     }, timeLeft);
//     res.send("OK");
//     res.end();
// }