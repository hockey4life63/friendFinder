let fs =require("fs")
let friends;
let setup = ()=>{fs.readFile(__dirname+"/friends.json", "utf8", (err, data)=>{
    friends= JSON.parse(data);
  })}
let getFriends = ()=>{
  return friends
}

let addFriend = (friendObj)=>{
  friends.push(friendObj);
  fs.writeFile(__dirname+"/friends.json",JSON.stringify(friends))
}

let checkFriends = function (newFriend) {
  //get ithe total difference between newFriend and currently stored friends
  let difference = friends.map(element => element.scores.reduce((sum, value, index)=> Math.abs(value - newFriend.scores[index])+sum, 0))
  return friends[difference.indexOf(Math.min(...difference))];
}

module.exports ={
  setup,
  getFriends,
  addFriend,
  checkFriends
}