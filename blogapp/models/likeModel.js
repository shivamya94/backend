const mongoose = require("mongoose");

//router handler
const likeSchema = new mongoose.Schema({
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference to the post model
    },
    user: {
        type:String,
        required:true,
    },
});

//export 
module.exports = mongoose.model("Like",likeSchema);