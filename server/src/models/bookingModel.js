const mongoose = require("mongoose");
const { applyTimestamps } = require("./userModel");
const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "provider",
    },
    services: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "service",
    },
    toltalPrice:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["Requested","Accepted","In Progress","Completed","Cancelled"],
        default:"Requseted",
    },
    bookingData:{
        type:Date,
        required:true,
    },
    paymentStatus:{
        type:String,
        enum:["Pending","Compeleted","Failed"],
        default:"Pending",
    },
},{timestamps:true});
module.exports = mongoose.model("booking",bookingSchema);