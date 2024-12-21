const bcrypt = require("bcrypt");
const user = require("../models/User");


//signup route handler
exports.signup = async (req,res) => {
    try{
        //get data
        const {name,email,password,role} = req.body;
        //check if user already exist
        const existinguser = await user.findOne({email});
        

    }
    catch(err) {

    }
}