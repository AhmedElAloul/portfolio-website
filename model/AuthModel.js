const mongoose = require("mongoose")

const AuthSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
})

const AuthModel = mongoose.model("users", AuthSchema)

module.exports = {
    AuthModel
}