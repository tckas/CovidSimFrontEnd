//document.getElementById("diario").innerHTML = "2000"

const axios = require('axios');
const { json } = require('express');


async function login(){
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





async function dataAll(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/data/", {
        headers:{
        'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIyYjJiZjU2ZS0wMjRiLTQzYjEtYTRlMS1jNzhjYmMzMzFkOWMifQ.btU0p7_MhJqoBHFN9MIZHGW1UYZYW7AUIoKZfvM6njA',
        } 
    })
    console.log(res.data);
}

async function internadosf(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/internados", {
        headers:{
        'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIyYjJiZjU2ZS0wMjRiLTQzYjEtYTRlMS1jNzhjYmMzMzFkOWMifQ.btU0p7_MhJqoBHFN9MIZHGW1UYZYW7AUIoKZfvM6njA',
        }
    })
    var intern = res.data;
    var atualintern = intern[Object.keys(intern).reverse()[0]];  // atual
    var dataintern = atualintern.data; // data do ultimo dia
    var internadosatuais = atualintern.internados; // internados atualmente
    var internadosuciatual = atualintern.internados_uci; // internados em uci atualmente
    var obitosatual = atualintern.obitos; // obitos atuais
}

async function casosdiariosf(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/casos_diarios", {
        headers:{
        'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIyYjJiZjU2ZS0wMjRiLTQzYjEtYTRlMS1jNzhjYmMzMzFkOWMifQ.btU0p7_MhJqoBHFN9MIZHGW1UYZYW7AUIoKZfvM6njA',
        }
    })
    var casosdia = res.data;
    var casosatuais = casosdia[Object.keys(casosdia).reverse()[0]];
    var datacasosatual = casosatuais.data;
    var novosconfirm = casosatuais.confirmados_novos;
}

async function predictionf(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/prediction", {
        headers:{
        'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIyYjJiZjU2ZS0wMjRiLTQzYjEtYTRlMS1jNzhjYmMzMzFkOWMifQ.btU0p7_MhJqoBHFN9MIZHGW1UYZYW7AUIoKZfvM6njA',
        }
    })
    var simul = res.data
    var length= 0;
    for(var key in simul) {
        if(simul.hasOwnProperty(key)){
            length++;
        }
    }
    for (let i = 0; i < length; i++) {
        console.log(simul[i])
    }
    console.log(simul);
    
    //console.log(suscet);
}
// segundo numero de infetados
// terceiro recuperados
//primeiro suscetiveis

predictionf();
//casosdiariosf();
//internadosf();