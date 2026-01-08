import jwt from "jsonwebtoken";

const gentoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export default gentoken;
