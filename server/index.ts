import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "./routes/book"
import userRouter from "./routes/user"
import authRoutes from "./routes/authRoutes";
dotenv.config();

const app = express();
const port = process.env.PORT || 3006;
const mongoUri = process.env.MONGO_URI;

app.use(express.json());
app.use('/books',bookRoutes);
app.use('/user',userRouter)
app.use("/api", authRoutes);
mongoose
//@ts-ignore
  .connect(mongoUri, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
