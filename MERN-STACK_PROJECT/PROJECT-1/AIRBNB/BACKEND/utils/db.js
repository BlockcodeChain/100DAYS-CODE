import mongoose from 'mongoose'
const ConnectDb=async ()=>{
    try{
      await  mongoose.connect(process.env.MONGODB_URL)
       console.log("Databse Connected Successfully")
    }

    catch(err){
        console.log("DATABASE NOT CONNECTED")
        console.log("Error: ",err);
    }
}
export default ConnectDb