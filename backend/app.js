import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();


const app = express()

app.use(express.json());

app.use(cors());

if(process.env.NODE_ENV === 'dev'){
    app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
    connectDB();
})
