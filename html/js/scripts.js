const axios = require('axios');
const { json } = require('express');

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

/* async function login(){
    const res = await axios.post("https://covidbackendual.herokuapp.com/login",{},{
        auth: {
            username: "tiago",
            password: "11223344"
        }
    }
    )
    .then(function(res){
        //console.log(res.data)
        let datatot = res.data
        let tokensend = datatot.toString().substring(0,20);
        console.log(tokensend);
        console.log(res.data)

    })
    }

login();
console.log("hi"); */

// console.log(token)
async function myFunction(){
    document.getElementById("exemplo").innerHTML = key;
}