const mongoose = require('mongoose')

const favilitator_schema = mongoose.Schema({
    name: {type: String , default: "" , require:true},
    phone: {type: String , default: "" , require:true},
    email: {type: String , default: "" , require:true},
    title: {type: String , default: "" },
    image: {type: String , default: "" }
})
module.exports = mongoose.model('facilitator', favilitator_schema)