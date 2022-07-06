const express = require("express");
const app = express();
require('dotenv').config();
let key = process.env.TOKEN;
console.log(key);
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
console.log(port);
const path = require('path');
app.use(express.static(__dirname + "/public"));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/dados', function(req, res){
    res.sendFile(path.join(__dirname, '/public/dados.html'));
});
app.get('/simulacao', function(req, res){
    res.sendFile(path.join(__dirname, '/public/sim.html'));
});

/* if (process.env.environment == "production"){
    var key = process.env.token 
}else{
    
}
     */

