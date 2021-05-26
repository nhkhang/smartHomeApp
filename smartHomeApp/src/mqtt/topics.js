const prefix = "nhkhang/feeds/";
let postfixTopicList = [
    "bk-iot-led",
    "bk-iot-humid",
    "bk-iot-light",
    "bk-iot-gas",
    "bk-iot-magnetic"
]
export const topicList = postfixTopicList.map(topic => prefix + topic);

// export const handleTopicList = {
//     [prefix+"bk-iot-led"]: handleLed,
//     [prefix+"bk-iot-humid"]: handleHumid,
//     [prefix+"bk-iot-light"]: handleLight,
//     [prefix+"bk-iot-gas"]: handleGas,
//     [prefix+"bk-iot-magnetic"]: handleMagnetic,
// }