import express from 'express'
import { logout } from '../controller/auth.controller.js'
import { login } from '../controller/auth.controller.js'
import { signUp } from "../controller/auth.controller.js"
let authRouter=express.Router()
authRouter.post('/signup',signUp)
authRouter.post('/login',login)
authRouter.get('/logout',logout)
export default authRouter