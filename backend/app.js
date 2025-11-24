import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
import authRouter from "./routes/authRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import { auth } from "./middlewares/authMiddleware.js";
import categoryRouter from "./routes/categoryRoutes.js";

const app = express()

app.use(express.json());

app.use(cors());

app.use('/api/auth',authRouter);
app.use('/api/course',auth,courseRouter);
app.use('/api/category',auth,categoryRouter);

if(process.env.NODE_ENV === 'dev'){
    app.use(morgan('dev'));
}



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
    connectDB();
})
