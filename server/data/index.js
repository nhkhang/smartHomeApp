const mockHouseInfo = [
  { LightIntensity: 200, Humidity: 23, Temperature: 27,},
  { LightIntensity: 250, Humidity: 36, Temperature: 26,},
  { LightIntensity: 220, Humidity: 24, Temperature: 29,},
  { LightIntensity: 120, Humidity: 24, Temperature: 28,},
  { LightIntensity: 300, Humidity: 32, Temperature: 27,},
  { LightIntensity: 230, Humidity: 23, Temperature: 27,},
  { LightIntensity: 190, Humidity: 24, Temperature: 27,},
  { LightIntensity: 280, Humidity: 24, Temperature: 27,},
  { LightIntensity: 300, Humidity: 25, Temperature: 26,},
  { LightIntensity: 260, Humidity: 24, Temperature: 25,},
];

const mockUser = [
  { name: 'khang', password: '12345678', email: 'khang@gmail.com',},
  { name: 'hung', password: '12345678', email: 'hung@gmail.com',}
];

module.exports = {
  mockUser,
  mockHouseInfo,
};