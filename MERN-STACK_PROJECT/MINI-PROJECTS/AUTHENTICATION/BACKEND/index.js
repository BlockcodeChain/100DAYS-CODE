import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './utils/data.js';
import authRouter from './routes/auth.routes.js'
const app=express();
dotenv.config({
    path:"./.env"
})
app.use(express.json())
app.use(cors())
app.use('/api/auth',authRouter)
const myport=process.env.PORT||3000

app.listen(myport,(req,res)=>{
    connectDB();
    console.log(`server running on ${myport}`)
})