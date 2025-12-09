import express from 'express';
import { getCourse,getCourseById } from '../controllers/courseController.js';

const courseRouter = express.Router();

// get all courses
courseRouter.get('/',getCourse);

// get course by its id
courseRouter.get('/:id',getCourseById);


export default courseRouter;