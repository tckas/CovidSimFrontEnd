const axios = require('axios');
const { json } = require('express');
require('dotenv').config();

let key = process.env.TOKEN;
console.log(key);

/*async function prediction_get(){
const res = await axios.get("https://covidbackendual.herokuapp.com/prediction", {
    Headers:{
        "token":"2222222",
    }
})
.then(function(res){
    console.log(res.data)
})
} */

// prediction_get();

async function login(){
    const res = await axios.post("https://covidbackendual.herokuapp.com/login",{},{
        auth: {
            username: "tiago",
            password: "11223344"
        }
    }
    )
    .then(function(res){
        //console.log(res.data)
        console.log(res.data)

    })
    }

login();

// console.log(token)
