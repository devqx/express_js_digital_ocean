var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello digital ocean ");
}).listen(9000, function(){
    console.log("magic is happening on port 9000");
});