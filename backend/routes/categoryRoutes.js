import express from 'express';
import { getCategory } from '../controllers/categoryController.js';

const categoryRouter = express.Router();

// get all category
categoryRouter.get('/',getCategory);


export default categoryRouter;