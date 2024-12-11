//import mongoose
const mongoose = require("mongoose");

//router handler
const commentSchema = new mongoose.Schema({
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference to the post model
    },
    user:{
        type:String,
        required:true,

    },
    body:{
        type:String,
        required:true,
    }
});

module.exports = mongoose("Comment", commentSchema);