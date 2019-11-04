//First get all the packages installed
const express = require("express");
const app = express();

const config = require("./config");

const db = require("./config/database");

const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

const cors = require("cors");

//Add some middleware
const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

// The limit size of images to be uploaded 50mb
app.use(express.urlencoded({ limit: "50mb", extended: true }));
//To be able to pass json data to the app
app.use(express.json({ limit: "50mb" }));
app.use(cors);

// The routes that is being called are the routes files
app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(
  config.port,
  console.log("Server is running on http://localhost:%s", config.port)
);

// To run db
// brew services start mongodb - community@4.2
// the do mongo
// the  db.version()
