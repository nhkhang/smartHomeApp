const dbConfig = require("../config/db.config");
const url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}`;

const MongoClient = require('mongodb').MongoClient;

module.exports.Login = (req) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      if (err) reject(err);
      var dbo = db.db(dbConfig.DATABASE_NAME);
      var query = {'name': req.username, 'password': req.password};
      dbo
        .collection(dbConfig.USER)
        .find(query)
        .toArray((err, res) => {
          if (err) reject(err);
          if (res.length != 0) {
            resolve({'result': true});
          } else {
            resolve({'result': false});
          }
          db.close();
        });
    });
  });
};
