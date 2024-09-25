const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model.js");
const userRoute = require("./routes/user.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello from here Node API server");
});

mongoose
  .connect(
    "mongodb+srv://goncalovr9:dz2CPUohusOQW6fb@backenddb.5ml9j.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("server is running onport 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
