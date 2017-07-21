const express = require("express");
const path = require("path");
const homePath = path.join(__dirname + "/../public/" + "home.html")
const surveyPath = path.join(__dirname + "/../public/" + "survey.html")
const router = express.Router();

  router.get("/", function (req,res) {
      res.sendFile(homePath);
      // console.log(homePath)
      // res.send("home page")
    })
  router.get("/home", function (req,res) {
      res.sendFile(homePath);
      // res.send("home page")
    })
  router.get("/survey",function (req, res) {
      res.sendFile(surveyPath);
      // res.send("survey page")
    })

  module.exports= router;
