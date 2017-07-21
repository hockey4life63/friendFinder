const express = require('express');
const router = express.Router();
const friendsData = require("../data/friends");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.text());
router.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
router.post("/friends", function (req, res) {
  let newFriend = req.body;
  
  res.json(friendsData.checkFriends(newFriend));
  friendsData.addFriend(newFriend)
})
router.get("/friends", function (req, res) {
  res.json(friendsData.getFriends())
})


module.exports = router;