const dbConfig = require("../config/db.config");
const url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}`;

const MongoClient = require('mongodb').MongoClient;

module.exports.GetAllInfo = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      if (err) reject(err);
      var dbo = db.db(dbConfig.DATABASE_NAME);
      var query = {};
      dbo.collection(dbConfig.HOUSE_INFO).find(query).toArray((err, res) => {
        if (err) reject(err);
        var meanInfo = calculateMean(res);
        resolve(meanInfo);
        db.close();
      });
    });
  });
}

function calculateMean(res) {
  var meanLightIntensity = 0;
  var meanHumidity = 0;
  var meanTemperature = 0;
  res.forEach(x => {
    meanLightIntensity += x.LightIntensity / res.length;
    meanHumidity += x.Humidity / res.length;
    meanTemperature += x.Temperature / res.length;
  });

  return {
    LightIntensity: meanLightIntensity.toFixed(2),
    Humidity: meanHumidity.toFixed(2),
    Temperature: meanTemperature.toFixed(2),
  }
}