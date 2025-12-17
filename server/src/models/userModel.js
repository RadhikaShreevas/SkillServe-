const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
     email:{
        type: String,
        required:true,
        unique:true,
        trim:true,
    },
     password:{
        type: String,
        trim:true,
    },
      role:{ 
        type: String,
        enum:["user","provider","admin"]
       
    },
    
      profileImage:{
        type: String,
        required:true,
        
    },

},{timestamps:true});
module.exports =mongoose.model("user",userSchema)