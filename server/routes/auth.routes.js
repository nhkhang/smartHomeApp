const express = require('express')
const router = express.Router()
const AuthController = require("../controller/auth.controller");

module.exports.login = async (req, res) => {
  console.log("API: Check login");
  try {
      console.log("Request payload", req.body);
      var checkLogin = await AuthController.Login(req.body);
      res.send(checkLogin);
  } catch (err) {
      return res.status(500).json({ 
          data: { 
            errorCode: 1000, 
            error: err
          }, 
          success: true, 
          message: "true" 
      });
  }
}