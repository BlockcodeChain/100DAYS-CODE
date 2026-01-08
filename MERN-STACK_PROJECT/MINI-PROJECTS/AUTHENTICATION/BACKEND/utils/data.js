import mongoose from 'mongoose'
const connectDB= async ()=>{
     try{
       await mongoose.connect(process.env.MONGODB_URL);
       console.log("DB CONNECTED SUCCESSFULLY ✅")
     }
     catch(err){
        console.log("DB NOT CONNECTED SUCCESSFULLY ",err);
      
     }
}
export default connectDB