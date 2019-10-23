const model = require("./model");
const jwt = require("jsonwebtoken");
const config = require("../../config");

module.exports = {
  login: (req, res) => {
    model.findOne({ email: req.body.email }, (err, user) => {
      if (err) throw err;

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          let token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 //expires in 24hs
          });
          res.status(200).send({ auth: true, token });
        } else {
          res.status(500).send({ auth: false, msg: "Passwords did not match" });
        }
      });
    });
  },
  register: (req, res) => {
    let newUser = new model({
      forename: req.body.forename,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password
    });

    newUser
      .save()

      .then(result => {
        console.log(result);
        res
          .status(200)
          .send({ msg: "Register was Successful", user_id: result._id });
        // .send({ msg: "Register was Successful", user_id: "id" });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ msg: "Register was Unsuccessful" });
      });
  }
};
