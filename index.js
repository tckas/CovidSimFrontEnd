let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);



const express = require("express");
const app = express();

const path = require('path');
app.use(express.static(__dirname + "/public"));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/html/index.html'));
});

