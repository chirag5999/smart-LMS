import mongoose, { Mongoose } from "mongoose";

const userSchema =  new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:["student","instructor","admin"],default:"student"},
});


const User = mongoose.Model('User',userSchema);

export default User;