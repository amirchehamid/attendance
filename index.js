const express = require('express');
const MongoClient = require('mongodb').MongoClient
const app = express();
require('dotenv').config();

const port = process.env.port || 5000

//connect to mongodb atlas
MongoClient.connect(process.env.mongo_url, { useUnifiedTopology: true },{ useNewUrlParser:true})
  .then(client => {
    console.log('Connected to MongoDB atlas') 
  })
  .catch(error => console.error(error))

//port
app.listen(port, () => {
    console.log("Start listening at port 5000");
})