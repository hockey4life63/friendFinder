const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const apiRoutes= require("./app/routing/apiRoutes");
const htmlRoutes= require("./app/routing/htmlRoutes");
const data = require("./app/data/friends")
//app and port
const app = express();
const PORT = process.env.PORT || 3000;
//path to html files
data.setup();
data.getFriends();
//set up body parsser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
//setup static files for css and client js
app.use("/public",express.static(path.join(__dirname,"app/public")))
//all routes functions get called

app.use("/", htmlRoutes)
app.use("/api", apiRoutes)
//turn on app to liten on port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
