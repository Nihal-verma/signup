const mongoose = require("mongoose")
const signUpschema = new mongoose.Schema({
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const signUpModel = new mongoose.model("data",signUpschema)
module.exports =  signUpModel