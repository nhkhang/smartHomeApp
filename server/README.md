## HOW TO RUN
node index.js

## API
- Get mean of light intensity, humidity and temperature
GET: http://localhost:3000/getHouseInfo
Result (example):
{
  "LightIntensity": "235.00",
  "Humidity": "25.90",
  "Temperature": "26.90"
}

- Update light intensity, humidity and temperature
POST: http://localhost:3000/updateHouseInfo
Payload of request:
{
  LightIntensity: number
  Humidity: number,
  Temperature: number,
}
Result:
{
  "LightIntensity": "235.00",
  "Humidity": "25.90",
  "Temperature": "26.90"
}


- Check user login successul or not
POST: http://localhost:3000/login
Payload of request:
{
  username: string,
  password: string,
}
Result (example):
{
  res: true // if login successully
}
## TEST

Run client app in smartHomeApp/client
expo start 

If you use the emulator, your IP address in smartHomeApp/src/screen/Test.js should be
http://10.0.2.2:3000/light

If you use real device, your IP address in smartHomeApp/src/screen/Test.js should be
http://{Your IP address}:3000/light

You can get this IP adress by ipconfig (Windows) / ifconfig (Ubuntu)
## SOME REFS
- https://learn.adafruit.com/adafruit-io/mqtt-api
- https://github.com/adafruit/adafruit-io-node
- https://io.adafruit.com/api/docs/mqtt.html#mqtt-data-format
