require('dotenv').config();

var key = process.env.token;
export { key };
const express = require("express");
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

const path = require('path');
app.use(express.static(__dirname + "/public"));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/html/index.html'));
});
app.get('/dados', function(req, res){
    res.sendFile(path.join(__dirname, '/html/dados.html'));
});
app.get('/simulacao', function(req, res){
    res.sendFile(path.join(__dirname, '/html/sim.html'));
});

/* if (process.env.environment == "production"){
    var key = process.env.token 
}else{
    
}
     */

