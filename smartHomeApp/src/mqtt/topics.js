const prefix = "nhkhang/feeds/";
let topicList = [
    "bk-iot-led",
    // "bk-iot-humid",
    // "bk-iot-light",
    // "bk-iot-gas",
    // "bk-iot-magnetic"
]
export default topicList.map(topic => prefix + topic);