const axios = require('axios');
const { json } = require('express');
require('dotenv').config();


async function login(){ //apenas para demonstrar como seria feito o pedido do token ao Backend API com o método post
    const res = await axios.post("https://covidbackendual.herokuapp.com/login",{},{
        auth: {
            username: "tiago",
            password: "11223344"
        }
    }
    )
    var token = res.data
    return token.token;
}


async function internadosf(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/internados", {
        headers:{
        'token': process.env.TOKEN,
        }
    })
    var intern = res.data;
    var atualintern = intern[Object.keys(intern).reverse()[0]];  // atual
    datainternados = atualintern.data; // data do ultimo dia
    internadosatuais = atualintern.internados; // internados atualmente
    internadosuciatual = atualintern.internados_uci; // internados em uci atualmente
    obitosatual = atualintern.obitos; // obitos atuais
    listainternados = []
    listauci = []
    listaobitos = []
    listadatasintern = []
    last_key =Object.keys(intern).length;
    for (var i = 0; i< last_key;i++){
        var num = String(i)
        var internados = intern[num]["internados"]
        var internadosuci = intern[num]["internados_uci"]
        var obitosdata = intern[num]["obitos"]
        var dataintern = intern[num]["data"]
        listadatasintern.push(dataintern)
        listaobitos.push(obitosdata)
        listainternados.push(internados)
        listauci.push(internadosuci)
        
    }
    
    return [internadosatuais, datainternados, internadosuciatual, obitosatual, listainternados, listauci, listaobitos, listadatasintern]
}
internadosf();
async function casosdiariosf(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/casos_diarios", {
        headers:{
        'token': process.env.TOKEN,
        }
    })
    var casosdia = res.data;
    var casosatuais = casosdia[Object.keys(casosdia).reverse()[0]];
    datacasosatual = casosatuais.data;
    novosconfirm = casosatuais.confirmados_novos;

    listaconfirmados = []
    listadatasconf = []
    last_key =Object.keys(casosdia).length;
    for (var i = 0; i< last_key;i++){
        var num = String(i)
        var casosnovos = casosdia[num]["confirmados_novos"]
        var datasnovos = casosdia[num]["data"]
        listaconfirmados.push(casosnovos)
        listadatasconf.push(datasnovos)
    }
    
    return [novosconfirm, datacasosatual, listaconfirmados, listadatasconf]
} 

async function predictionf(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/prediction", {
        headers:{
        'token': process.env.TOKEN,
        }
    })
    var simul = JSON.parse(JSON.stringify(res.data))
    var simul2 = JSON.parse(JSON.stringify(res.data))
    var simul3 = JSON.parse(JSON.stringify(res.data))
    var arraylength = simul.length;
    
    for (var i = 0; i<arraylength;i++){ //suscetiveis
        simul[i].splice(1,2);
    }

    for (var b = 0; b<arraylength;b++){ //numero de infetados
        simul2[b].splice(2,1);
        simul2[b].splice(0,1);

    }

    for (var b = 0; b<arraylength;b++){ //numero de recuperados
        simul3[b].splice(0,2);

    }
    return [simul, simul2, simul3]
}
// segundo numero de infetados
// terceiro recuperados
//primeiro suscetiveis


module.exports = {casosdiariosf, internadosf}