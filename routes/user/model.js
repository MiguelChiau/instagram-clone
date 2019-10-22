// This is the mongoose model for the user
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  forename: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // To make sure each email can only register once in the db
    unique: true
  },
  account_created: {
    type: String,
    default: Date.now()
  }
});

userSchema.pre("save", function(next) {
  let user = this;
  if (!user.isModified("password")) return next();

  //   To hash the user's password
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

//Creating a method to compare password when user login again
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
