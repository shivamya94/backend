const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//signup route handler
exports.signup = async (req,res) => {
    try{
        //get data
        const {name,email,password,role} = req.body;
        //check if user already exist
        const existingUser = await User.findOne({email});
        
        if(existingUser) {
            return res.status(400).json({
                success:false,
                message:'User already Exists',
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

        //Create entry for user
        const user = await User.create({
            name,email,password:hashedPassword,role
        })

        return res.status(200).json({
            success:true,
            message:'User Created Successfully',
        });

    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'User cannot be registered, please try again later',
        })
    }
}
//user login
exports.login = async (req,res) => {
    try{
        //fetch data
        const {email,password} = req.body;
        //validation on email and password
        if(!email || !password) {
            return res.status(400).json({
                success:false,
                message:'please fill all the details carefully',
            });
        }

        //check for register user
        const user = await User.findOne({email});
        //if not a register user
        if(!user) {
            return res.status(401).json({
                success:false,
                message:'User is not registerd',
            });
        }

        //verify password & generate a JWT token
        if(await bcrypt.compare(password,user.password)){

        }
        else{
            //password do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }

    }
    catch(error){

    }
}