const http = require('http');
const mqtt = require('mqtt');
// const client = mqtt.connect('mqtt://broker.hivemq.com');

const host_adafruit = "io.adafruit.com";
const port_adafruit = 8883;
const io_username = "nhkhang";
const io_key = "aio_SVWG719Tbm1GWpG57UUgBMSGUBvy";

var led_feed = "nhkhang/feeds/bk-iot-led";

var client = mqtt.connect('mqtts://io.adafruit.com', {
    port: port_adafruit,
    username: io_username,
    password: io_key
});

var turn_light = true;

client.on('connect', () => {
    client.publish(led_feed, 'ON')
    // client.subscribe(led_feed)
    console.log("Sub to LED")
});

client.on('error', (error) => {
    console.log('MQTT Client Errored');
    console.log(error);
});

client.on('message', function (topic, message) {
    console.log("Receive messages");
    if (topic == led_feed) {
        turn_light = (message.toString() === 'true');
    }
    console.log(message.toString()); // for demo purposes.
  });


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
