import mongoose from 'mongoose'
const userschema= mongoose.Schema(
    {
      name:{
        type:String,
        require:true,
         trim: true
      },
      email:{
        type:String,
        require:true,
        unique:true,
        lowercase: true
      },
       password:{
        type:String,
        require:true
      },

    }
,{timpestamps:true})
const usermodel=mongoose.model("user",userschema)
export default usermodel