const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Creating a schema with all type wanted in the db
const postSchema = Schema({
  // every post needs an id
  user_id: {
    type: ObjectId,
    required: true
  },
  //   The name coming with the post
  display_name: {
    type: String,
    required: true
  },
  //   The image will be stored as a string in the db
  image: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: false
  },
  //   the timestamp for when uploading teh image
  timestamp: {
    type: String,
    default: Date.now()
  }
});

// The model will be used the AbortController.js
const model = mongoose.model("post", postSchema);
model.exports = model;
