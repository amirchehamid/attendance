const MongoClient = require('mongodb').MongoClient

const userSchema = new MongoClient({
    name: String,
    matric: String,
})

const UserModel = MongoClient.model("ListName", userSchema)

module.exports = UserModel