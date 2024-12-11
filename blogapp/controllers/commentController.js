//import model

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic

exports.createComment = async (req,res) => {
    try{
        //fetch data from req body
        const {post, user, body} = req.body;
        //create a connect object 
        const Comment = new Comment({
            post,user,body
        });

        //save the new comment into the database
        const savedComment = await Comment.save();
        
        
    }
    catch(error) {

    }
}