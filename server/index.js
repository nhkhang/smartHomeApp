const http = require('http');
const express = require('express');
const mongoose = require("mongoose");
const { HouseInfo, User } = require("./model");
const { mockHouseInfo, mockUser } = require("./data"); 

const dbConfig = require("./config/db.config");
mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DATABASE_NAME}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create mock data
mockHouseInfo.forEach(function(n) {
  HouseInfo.findOneAndUpdate( n, n, { upsert: true }, function(err,doc) {
  });
});
mockUser.forEach(function(n) {
  User.findOneAndUpdate( n, n, { upsert: true }, function(err,doc) {
  });
});

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const router = require("./routes");
app.use("/", router);

server.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
