import usermodel from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import genToken from "../utils/token.js"
// signup controller
export const signUp=async (req,res)=>{
try{
let{firstName,lastName,userName,email,password}=req.body
let existemail= await usermodel.findOne({email})
if(existemail){
    return res.status(400).json({message:"email already exist!"})
}

let existusername= await usermodel.findOne({userName})
if(existusername){
    return res.status(400).json({message:"UserName already exist!"})
}
if(password.length<8) {
    return res.status(400).json({message:"password must be at least 8 character"})
}
// password hash kregge bcrypt js ki help se
let hashpassword=await bcrypt.hash(password,10)

// user create
const user =await usermodel.create({
    firstName,
    lastName,
    userName,
    email,
    password:hashpassword
})
let token=await genToken(user._id)
res.cookie("token",token,{
    httpOnly:true,
    maxAge:7*24*60*60*1000,
    sameSite:"strict",
    secure:process.env.NODE_ENVIRONMENT==="production"
})

return res.status(200).json(user)
}
catch(err){
      console.log(err);
  return   res.status(500).json({message:err})
    
}
}
export const login=async (req,res)=>{
try{
let{email,password}=req.body
let user= await usermodel.findOne({email})
if(!user){
    return res.status(400).json({message:"email does not exist!"})
}
  if (!user.password) {
      return res.status(400).json({ message: "Password not set for this user" });
    }
const isMatched=await bcrypt.compare(password,user.password)
if(!isMatched){
    return res.status(400).json({message:"Incorrect Password"})
}

let token=await genToken(user._id)
res.cookie("token",token,{
    httpOnly:true,
    maxAge:7*24*60*60*1000,
    sameSite:"strict",
    secure:process.env.NODE_ENVIRONMENT==="production"
})

return res.status(201).json(user)
}
catch(err){
      console.log(err);
  return   res.status(500).json({message:err})
    
}
}
export const logout=async (req,res)=>{
try{
res.clearCookie("token")

return res.status(200).json({message:"logout sc+uccessfully"})
}
catch(err){
      console.log(err);
  return   res.status(500).json({message:"logout error"})
    
}
}