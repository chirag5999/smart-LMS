import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async(req,res) => {
    try{
         // get user details from the user body
        const {name,email,password} = req.body;

        // check if user is already existing
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User with email already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({
            name,
            email,
            password:hashedPassword
        });
        await user.save();
        //create and return the token

       return res.status(201).send("Account registered successfully");
    }catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}


export const loginUser = async(req,res) => {
   try{
        // get email and password
        const {email,password} = req.body;
        // check if user exists
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(400).json({message:"Invalid Credentials!"})
        }

        // match passwords
        const isMatching = await bcrypt.compare(password,existingUser.password);
        if(!isMatching){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const payload = {
            user:{
                id:existingUser.id,
                role:existingUser.role,
            }
        };
        
        jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1d'},(err,token) => {
            if(err){
                console.log(err);
                throw new err;
            }
            // return token 
            return res.status(200).json({token});
        })


   }catch(err){
    console.log(err);
    res.status(500).send("Something went wrong");
   }
}