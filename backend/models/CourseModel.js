import mongoose, { mongo } from "mongoose";

const courseSchema =  new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true,default:0},
    instructor:{type: mongoose.Schema.ObjectId,ref:'User',required:true},
    category:{type:mongoose.Schema.ObjectId,ref:'Category',required:true}
});


const Course = mongoose.Model('Course',courseSchema);

export default Course;