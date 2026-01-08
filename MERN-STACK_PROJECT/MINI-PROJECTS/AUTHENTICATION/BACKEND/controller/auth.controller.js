import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import gentoken from "../utils/token.js";

// =================== SIGNUP ===================
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1️⃣ Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // 2️⃣ Check existing user
    const existemail = await User.findOne({ email });
    if (existemail) {
      return res.status(409).json({
        message: "User already exists, you can login",
        success: false,
      });
    }

    // 3️⃣ Hash password
    const hashpassword = await bcrypt.hash(password, 10);

    // 4️⃣ Create user
    const user = await User.create({
      name,
      email,
      password: hashpassword,
    });

    // 5️⃣ Success response
    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });

  } catch (err) {
    console.log("ERROR:", err);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// =================== LOGIN ===================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // 2️⃣ Check existing user
    const existemail = await User.findOne({ email });
    if (!existemail) {
      return res.status(404).json({
        message: "User not found, please signup",
        success: false,
      });
    }

    // 3️⃣ Compare password
    const isMatch = await bcrypt.compare(password, existemail.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    // 4️⃣ Generate token
    const token = gentoken(existemail._id);

    // 5️⃣ Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // 6️⃣ Success response
    return res.status(200).json({
      message: "Login successful",
      success: true,
    });

  } catch (err) {
    console.log("ERROR:", err);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// =================== LOGOUT ===================
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (err) {
    console.log("ERROR:", err);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
