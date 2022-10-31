const mongoose = require("mongoose")

const BusinessSchema = mongoose.Schema({
    name: String,
    number: String,
    email: String,
})

const BusinessModel = mongoose.model("business", BusinessSchema)

module.exports = {
    BusinessModel
}