const axios = require('axios');
const { json } = require('express');





async function login(){
    const res = await axios.post("https://covidbackendual.herokuapp.com/login",{},{
        auth: {
            username: "tiago",
            password: "11223344"
        }
    })
    var token = res.data
    return token.token;


    }

async function dataAll(){
    const res = await axios.get("https://covidbackendual.herokuapp.com/data/", {
        headers:{
        'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIyYjJiZjU2ZS0wMjRiLTQzYjEtYTRlMS1jNzhjYmMzMzFkOWMifQ.btU0p7_MhJqoBHFN9MIZHGW1UYZYW7AUIoKZfvM6njA',
        }
    })
    return res.data
}


