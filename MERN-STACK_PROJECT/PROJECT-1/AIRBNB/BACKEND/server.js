import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ConnectDb from './utils/db.js';
const app=express();
dotenv.config({
    path:"./.env",
})
app.use(express.json());
app.use(cors());
const myport=process.env.PORT||3000;
app.get('/',(req,res)=>{
    res.send("server ruuning")
})
app.listen(myport,(req,res)=>{
    ConnectDb();
    console.log(`Server running at port ${myport}`)
})