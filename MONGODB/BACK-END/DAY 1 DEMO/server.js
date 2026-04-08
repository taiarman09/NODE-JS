const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs');
const { name } = require('ejs');

app.use(bodyParser.urlencoded({extended : true}));



function readData (){
    const data = fs.readFileSync("./data.json");
    return JSON.parse(data)
}

