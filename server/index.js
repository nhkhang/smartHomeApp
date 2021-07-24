const http = require('http');
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const { HouseInfo, User } = require("./model");
const { mockHouseInfo, mockUser } = require("./data"); 

const dbConfig = require("./config/db.config");
const AuthRoute =  require("../server/routes/index")
mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DATABASE_NAME}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true, 
}, function(err){
  if (err) throw err;
  console.log('Successfully connected');
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
app.use(cors()) // Use this after the variable declaration
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const router = require("./routes");
app.use("/", router);
// app.use('/api', AuthRoute)
server.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
