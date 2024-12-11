//impoort the model
const Todo = require("../models/Todo");

exports.createTodo = async(req,res) => {
    try {
        //extract title and description from request body
        const {title,description} = req.body;
        //create a new Todo obj and insert in DB
        const resoponse = await Todo.create({title,description});
        //send a json resoponse with a success flag
        res.status(200).json(
            {
                success:true,
                data:resoponse,
                message:'Entry Created Successfully'
            }
        );

    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}