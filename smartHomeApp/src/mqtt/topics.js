const prefix = "nhkhang/feeds/";
let postfixTopicList = [
    "bk-iot-temp-humid",
    "bk-iot-light",
    "bk-iot-gas",
    "bk-iot-magnetic",
    "bk-iot-relay",
    "bk-iot-button"
]
export const topicList = postfixTopicList.map(topic => prefix + topic);