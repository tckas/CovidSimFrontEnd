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

async function obitosdiariosf(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/get_obitos", {
        headers:{
            'token' : process.env.TOKEN,
        }
    })
    var obitosdia = res.data;
    listaobitosnovos = []
    listadataobitos = []
    last_key =Object.keys(obitosdia).length;
    for (var i = 0; i< last_key;i++){
        var num = String(i)
        var obitosnovo = obitosdia[num]["obitos_novos"]
        var datasobi = obitosdia[num]["data"]
        listaobitosnovos.push(obitosnovo)
        listadataobitos.push(datasobi)
    }
    return [listaobitosnovos, listadataobitos]
    
}

async function predictionf(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/prediction", {
        headers:{
        'token': process.env.TOKEN ,
        }
    })

    var info =  JSON.parse(JSON.stringify(res.data))
    var simul = []
    var simul2 = []
    var simul3 = []
    var arraylength = info.length;
    listafuturo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
    for (var i = 0; i<arraylength;i++){ //suscetiveis
        simul.push(info[i][0])
    }

    for (var i = 0; i<arraylength;i++){ //numero de infetados
        simul2.push(info[i][1])


    }

    for (var i = 0; i<arraylength;i++){ //numero de recuperados
        simul3.push(info[i][2])

    }
    return [simul, simul2, simul3, listafuturo]
}    
// segundo numero de infetados
// terceiro recuperados
//primeiro suscetiveis


module.exports = {casosdiariosf, internadosf, obitosdiariosf, predictionf}