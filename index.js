var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello digital ocean ");
});

app.listen(3000, function(){
    console.log("magic is happening on port 3000");
});