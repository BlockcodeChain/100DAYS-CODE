import mongoose from 'mongoose'

const connectDB=async ()=>{
    try{
      await  mongoose.connect(process.env.MONGODB_URL)
        console.log("DB CONNECTED SUCCESSFULY")
    }catch(err){
         console.error("DB CONNECTION FAILED ❌");
        console.error({message:"ERROR",err})
        
    }
}
export default connectDB;