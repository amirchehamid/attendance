const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const UserModel = require("./modules/UserModels")
const app = express();

//midleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//connect mongodb atlas
MongoClient.connect("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.yoj4p.mongodb.net/Attendance?retryWrites=true&w=majority", { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB Atlas')
    const db = client.db('Attendance')
    const attendanceCollection = db.collection('benrs')

    app.post('/attendance', (req, res) => {
      attendanceCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })
  })
  .catch(error => console.error(error))


//GET attendance
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

//start server
app.listen(5000, function() {
    console.log('Start listening on 5000')
  })