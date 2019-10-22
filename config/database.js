const mongoose = require("mongoose");

const config = require("./index");

const db = mongoose
  .connect(config.mongo_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to Database"))
  .catch(err => console.error("An error has occured", err));

module.exports = db;
