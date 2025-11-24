import Course from "../models/CourseModel.js";


export const getCourse = async(req,res) => {
    try{
        const courses = await Course.find({}).populate('category','name').populate('instructor','name');
        return res.status(200).json(courses);
    }catch(err){
        return res.status(500).json({message:"Internal Server Error"})
    }
}

export const getCourseById = async(req,res) => {
    try{
        const course = await Course.findById(req.params.id).populate('category','name').populate('instructor','name');
        if(!course){
            return res.status(404).json({message:"Course not found!!!"});
        }
        return res.status(200).json(course);
    }catch(err){
        return res.status(500).json({message:"Internal Server Error"});
    }
}