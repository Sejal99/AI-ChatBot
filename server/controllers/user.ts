import jwt, { Secret } from 'jsonwebtoken';
import User from "../models/user";
import bcrypt from 'bcrypt';

const secret: Secret = process.env.JWT_SECRET || '';
//@ts-ignore
export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};
//@ts-ignore
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ userId: user._id }, secret, {
      expiresIn: "1h",
    });
    //setting cookie in response
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 });
    res.json({ token });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};
