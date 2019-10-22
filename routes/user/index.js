const router = require("express").Router();

const controller = require("./controller");

// The endpoints
router.post("/login", controller.login);
router.post("/register", controller.register);

module.exports = router;
