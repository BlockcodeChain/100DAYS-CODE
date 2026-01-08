import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import cookieParse from 'cookie-parser'
import authRouter from './routes/auth.routes.js'
const app=express();
dotenv.config({
path:"./.env"
})
app.use(express.json());
app.use(cookieParse())
// Optional: parse URL-encoded data (for form submissions)
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth',authRouter)
const myport=process.env.PORT||3000
app.get('./',(req,res)=>{
    console.log("server started");
})
app.listen(myport,(req,res)=>{
    connectDB()
    console.log(`server running on port ${myport}`)
})