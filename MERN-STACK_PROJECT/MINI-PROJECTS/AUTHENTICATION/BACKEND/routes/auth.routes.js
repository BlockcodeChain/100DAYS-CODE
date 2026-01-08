import express from 'express'
import { signUp } from '../controller/auth.controller.js';
import { login } from '../controller/auth.controller.js';
import { logout } from '../controller/auth.controller.js';
import { loginValidation, signupValidation } from '../middleware/AuthValidation.js';
const router=express.Router();
router.post('/signUp',signupValidation,signUp)
router.post('/login',loginValidation ,login)
router.get('/logout',logout)
export default router