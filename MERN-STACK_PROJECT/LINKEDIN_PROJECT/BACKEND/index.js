import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
const app=express();
dotenv.config({
path:"./.env"
})
const myport=process.env.PORT||3000
app.get('./',(req,res)=>{
    console.log("server started");
})
app.listen(myport,(req,res)=>{
    connectDB()
    console.log(`server running on port ${myport}`)
})