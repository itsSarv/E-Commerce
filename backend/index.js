const port = 4000;
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const multer = require('multer');
const path = require('path')
const cors = require('cors');
const { error } = require('console');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017')

app.get('/',(req, res)=>{
    res.send("Express App is running")
})

app.listen(port, (e)=>
{if(!e){
    console.log("Server Running of port" + port)
}
else{
    console.log("Error : " + e)
}})