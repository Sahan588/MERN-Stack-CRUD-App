const mongoose = require("mongoose"); // <- "require" 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    gmail:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
    
});

module.exports = mongoose.model(
    "UserModel",
     userSchema)