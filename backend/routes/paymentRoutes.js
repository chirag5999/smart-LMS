import express from "express";
const paymentRouter = express.Router();
import createPaymentIntent from "../controllers/paymentController.js";
import { auth } from "../middlewares/authMiddleware.js";

paymentRouter.post('/create-payment-intent',auth,createPaymentIntent);


export default paymentRouter;