const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/html/inicial.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);