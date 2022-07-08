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
         token5 : key1[3]}) //vai buscar o resultado das funções importadas, e depois de declarar variáveis para as guardar estas variáveis serão as que são usadas no ficheiro EJS
    
});
app.get('/dados',async function(req, res){ 
    var tab = await lib.casosdiariosf() 
    var tab1 = await lib.internadosf()  
    var tab2 = await lib.obitosdiariosf() 
    res.render("dados",{inf : tab[2], inf1 : tab[3], inf2 : tab1[4], inf3 : tab1[5], inf4 : tab1[6], inf5 : tab1[7], inf6 : tab2[0], inf7 : tab2[1]})
    //vai buscar o resultado das funções importadas, e depois de declarar variáveis para as guardar estas variáveis serão as que são usadas no ficheiro EJS
});
app.get('/simulacao',async function(req, res){
   var pre = await lib.predictionf()
   res.render("sim",{simu : pre[0], simu1 : pre[1], simu2 : pre[2], simu3 : pre[3]}) //vai buscar o resultado das funções importadas, e depois de declarar variáveis para as guardar estas variáveis serão as que são usadas no ficheiro EJS
});



let port = process.env.PORT; //vai definir a porta da aplicação que está contida no .env, não será usada pois a app está stored em heroku, mas em caso de offline pode-se usar o localhost com a porta 8000
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
console.log(port);