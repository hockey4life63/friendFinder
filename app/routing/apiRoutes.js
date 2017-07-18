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
  let allFriends = friendsData.getFriends();
  let difference = [];
  console.log(allFriends)
  //loop thru all the currend people in friends 
  for(let i = 0; i<allFriends.length;i++){
    let total = 0;
    for(let k =0; k<newFriend.scores.length; k++){
      //compare to the newFriend being added
      console.log(newFriend.scores[k], allFriends[i].scores[k])
      total+=Math.abs(newFriend.scores[k]-allFriends[i].scores[k]);
    }
  }
  //find the min score
  let min;
  for(let i = 0;i<difference.length; i++){
    if(i === 0){
      min = i;
    } else {
      if(difference[i]<difference[min]){
        min = i;
      }
    }
  }
  let closestMatch = allFriends[min];
  friendsData.addFriend(newFriend);
  console.log(closestMatch,"min", min, "diff", difference)
  res.json(closestMatch);
})
router.get("/friends", function (req, res) {
  res.json(friendsData.getFriends())
})


module.exports = router;