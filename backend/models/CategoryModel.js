import mongoose, { Mongoose } from "mongoose";

const categorySchema =  new mongoose.Schema({
   name:{type:String,required:true,unique:true},
});


const Category = mongoose.Model('Category',categorySchema);

export default Category;