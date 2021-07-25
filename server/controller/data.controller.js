const dbConfig = require("../config/db.config");
const url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}`;

const MongoClient = require('mongodb').MongoClient;

const GetAllInfo = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {useUnifiedTopology: true}, (err, db) => {
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

const UpdateAllInfo = (insertJson) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, {useUnifiedTopology: true}, (err, db) => {
      if (err) reject(err);
      var dbo = db.db(dbConfig.DATABASE_NAME);
      // Insert data
      dbo.collection(dbConfig.HOUSE_INFO)
      .insertOne(insertJson, function(error, res){
          if (error) throw error;
          resolve("Location inserted!");
          console.log("Location inserted!");
      })
    });
  });
}

function calculateMean(res) {
  var sumLightIntensity = countLightIntensity = sumHumidity = countHumidity = sumTemperature = countTemperature = 0;
  res.forEach(x => {
    if (x.LightIntensity != null){
      sumLightIntensity += parseFloat(x.LightIntensity);
      countLightIntensity++;
    }
    if (x.Humidity != null){
      sumHumidity += parseFloat(x.Humidity);
      countHumidity++;
    }
    if (x.Temperature != null){  
      sumTemperature += parseFloat(x.Temperature);
      countTemperature++;
    }
  });
  console.log(countHumidity, countLightIntensity, countTemperature);
  var meanHumidity = sumHumidity / countHumidity;
  var meanLightIntensity = sumLightIntensity / countLightIntensity;
  var meanTemperature = sumTemperature / countTemperature;
  return {
    LightIntensity: meanLightIntensity.toFixed(2),
    Humidity: meanHumidity.toFixed(2),
    Temperature: meanTemperature.toFixed(2),
  }
}

module.exports = {
  GetAllInfo, UpdateAllInfo
}