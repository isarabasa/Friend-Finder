
var friendData = require("../data/friends.js")

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friendData);
        console.log("friendData[0].scores[0]: " + friendData[0].scores[0]);    
    });

app.post("/api/friends", function(req, res){
    console.log(req.body);
    });

// MISSING CODE...
    
};