const mongoose = require('mongoose')
 const user_schema = mongoose.Schema({
    name:{ type: String, default:"" , require: true},
    phone:{ type: String, default:"" , require: true},
    email:{ type: String, default:"", require:true },
    user_name:{ type: String, default:"",  },
    password:{ type: String, default:"", require: true}
 })

 module.exports = mongoose.model('user', user_schema)