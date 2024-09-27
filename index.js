import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import User from "./models/user.model.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server is running on port ${process.env.PORT || 3001}`);
    });
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });