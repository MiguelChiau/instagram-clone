//First get all the packages installed
const express = require("express");
const app = express();

const config = require("./config");

const db = require("./config/database");

const userRouter = require("./routes/user");

//Add some middleware
const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(express.urlencoded({ extended: true }));
//To be able to pass json data to the app
app.use(express.json());
app.use(cors);

// The routes that is being called are the routes files
app.use("/user", userRouter);

app.listen(
  config.port,
  console.log("Server is running on http://localhost:%s", config.port)
);

// To run db
// brew services start mongodb - community@4.2
// the do mongo
// the  db.version()
