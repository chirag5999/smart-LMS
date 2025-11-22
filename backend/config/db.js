import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("db successfully connected");
    }catch(err){
        //handleError(err);
        console.log(err);
    }
}

export default connectDB;