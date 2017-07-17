
  const server = require("./../../server")
  console.log(server)
  const app = server.app;
  const homePath = server.homePath;
  const surveyPath = server.surveyPath; 

  const getHomePage = function (req,res) {
      // res.sendFile(homePath);
      res.send("home page")
    };
  const getSurveyPage = function (req, res) {
      // res.sendFile(surveyPath);
      res.send("survey page")
    };
  const getPages = function () {
    app.get("/",function (req,res) {
      // res.sendFile(homePath);
      res.send("home page")
    })

    app.get("/home", function (req, res) {
      // res.sendFile(homePath);
      res.send("home page2")
    })

    app.get("/survey", function (req, res) {
      // res.sendFile(surveyPath);
      res.send("survey page")
    })

    app.get("/:page?", function (req, res) {
      let page = req.params.page;
      if(page !== "api"){
        res.send("404 page")
        // res.sendFile("404.html")
      }
    })
  }

  module.exports={
    getHomePage,
    getSurveyPage
  }
