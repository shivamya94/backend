const bcrypt = require("bcrypt");
const user = require("../models/User");


//signup route handler
exports.signup = async (req,res) => {
    try{
        //get data
        const {name,email,password,role} = req.body;
        //check if user already exist
        const existingUser = await user.findOne({email});
        
        if(existingUser) {
            return res.status(400).json({
                success:false,
                message:`User already Exists`,
            });
        }

        //secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);

        }
        catch(err) {
            return res.status(500).json({
                success: false,
                message: 'Error in hashing Password',
            });

        }

    }
    catch(err) {

    }
}