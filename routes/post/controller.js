const model = require("./model");

const jwt = require("jsonwebtoken");
const userModel = require("../user/model");

module.exports = {
  newpost: (req, res) => {
    let user_id = jwt.decode(req.body.auth_token).id;

    userModel.findById(user_id).then(result => {
      // now if the user doesn't exist
      if (!result) {
        res.send({ success: false, msg: "User not found " });
        return;
      }
      let newpost = new model({
        user_id: user_id,
        display_name: result.forename + "" + result.surname,
        image: req.body.image,
        desc: req.body.desc
      });

      //   now to run a save function
      newpost
        .save()
        .then(result => {
          res.send({ success: true, result: result });
        })
        .catch(err => {
          if (err) res.send({ success: false, error: err });
        });
    });
  }
};
