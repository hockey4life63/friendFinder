let fs =require("fs")
let friends;
let setup = ()=>{fs.readFile(__dirname+"/friends.json", "utf8", (err, data)=>{
  console.log(data)
    friends= JSON.parse(data);
  })}
let getFriends = ()=>{
  console.log("friends.js",friends)
  return friends
}

let addFriend = (friendObj)=>{
  friends.push(friendObj);
  fs.writeFile(__dirname+"/friends.json",JSON.stringify(friends))
}

module.exports ={
  setup,
  getFriends,
  addFriend
}