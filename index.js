const express = require("express");
const app = express();
require('dotenv').config();
var path = require("path");
const lib = require("./scripts");



app.set("view engine","ejs");

app.use(express.static(path.join(__dirname + "/public")));

app.get('/',async function(req, res){
    var key = await lib.casosdiariosf()
    var key1 = await lib.internadosf()
    res.render("index",{token : key[0], token1 : key[1], token2 : key1[0], token3 : key1[1], token4 : key1[2],
         token5 : key1[3]})
    
});
app.get('/dados',async function(req, res){ 
    var tab = await lib.casosdiariosf() //2 infetados 3 data
    var tab1 = await lib.internadosf()  //4 lista de internados, 5 lista uci, 6 lista obitos, 7 lista datas
    res.render("dados",{inf : tab[2], inf1 : tab[3], inf2 : tab1[4], inf3 : tab1[5], inf4 : tab1[6], inf5 : tab1[7]})
    
});
//app.get('/simulacao', function(req, res){
//    res.sendFile(path.join(__dirname, '/public/sim.html'));
//});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
console.log(port);