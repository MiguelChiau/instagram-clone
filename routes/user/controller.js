const model = require("./model");
const jwt = require("jsonwebtoken");
const config = require("../../config");

module.exports = {
  login: (req, res) => {
    model.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.status(500).send({ auth: false, msg: "Password is not correct" });
      }

      //Through an error is provided email doesn't exist in database
      if (!user) {
        res.send({ auth: false, msg: err });
        return;
      }
      //Otherwise check if password matches existing on db
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          let token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 //expires in 24hs
          });
          res.status(200).send({ auth: true, token });
        } else {
          res.send({ auth: false, msg: "Password is not correct" });
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
        let token = jwt.sign({ id: result._id }, config.secret, {
          expiresIn: 86400
        });
        res.status(200).send({ auth: true, token });
      })
      .catch(err => {
        if (err.code == 11000) {
          alert("Email already exits");
        } else {
          alert("An internal error has occured");
        }
        console.log(err);
        res.send({ auth: false, msg: err });
      });
  }
};
