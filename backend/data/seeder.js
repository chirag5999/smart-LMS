import Course from "../models/CourseModel.js";
import Category from "../models/CategoryModel.js";
import User from "../models/UserModel.js";
import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";
import { create } from "domain";

const importData = async() => {

    try{
        // clear the database
        await Course.deleteMany();
        await Category.deleteMany();
        await User.deleteMany();


        //  insert the data
        const usersData = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/users.json'),'utf-8'));
        const usersWithHashedPassword = usersData.map((user) => {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(user.password,salt);
            return {...user,password:hashedPassword};
        });

        const createdUsers = await User.insertMany(usersWithHashedPassword);

        const instructorUser = createdUsers.find((user) => user.role === 'instructor'); // to be used as reference in course 


        // insert category data
        const categoryData = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/category.json'),'utf-8'));
        const createdCategory = await Category.insertMany(categoryData);    

        const webDevCategory = createdCategory.find((category) => category.name === "Web Dev"); // to be used in course as reference


        // insert course
        const courses = [{
            title:"Complete Web Dev Course 2025",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
            price:99,
            instructor:instructorUser._id,
            category:webDevCategory._id
        }]

        await Course.insertMany(courses);
        console.log('Data successfully added to the database');
    }catch(err){
        console.log("Error adding the data",err);
    }
}