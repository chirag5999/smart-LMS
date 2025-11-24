import jwt from "jsonwebtoken"
import User from "../models/UserModel.js";


export const auth = async(req,res,next) => {
        // get token from request header
        // bearer token
    if(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')){
        return res.status(401).json({message:"Unauthorized, no token found"});
    }
    try{
        const tokenarr = req.headers.authorization.split(' ');
        const token = tokenarr[1];
            
        // decode the token 
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);

        // const fetch user information from the userId stored in token
        req.user = await User.findById(decodedToken.user.id);
        next();
    }catch(err){
        return res.status(401).json({message:"Invalid token"});
    }
}