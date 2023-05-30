const express = require("express");
const router = express.Router();

// Controllers
const {
  login,
  register,
  forgotPassword,
  resetPassword,
  comments
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/comment").post(comments)

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);

module.exports = router;