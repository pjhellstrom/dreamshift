const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/user");

const authController = {};

// Restrict access to root page
authController.home = function(req, res) {
  // res.render("index", { user: req.user });
};

// Go to registration page
authController.register = function(req, res) {
  res.render("register");
};

// CODE HERE TO DETERMINE IS MANAGER:

// Post registration
authController.doRegister = function(req, res) {
  const newUser = new User({
    username: req.body.username,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    phoneNumber: req.body.phonenumber,
    location: req.body.location,
    isManager: req.body.isManager,
    teamId: req.body.teamid
  });
  User.register(newUser, req.body.password, function(err, username) {
    console.log(newUser);
    if (err) {
      console.error(err);
      return res.json({ username: username });
    }
    console.log("authController doRegister callback hit");
    passport.authenticate("local")(req, res, function() {
      res.redirect("/");
    });
  });
};

// Go to login page
authController.login = function(req, res) {
  res.render("login");
};

// Post login
authController.doLogin = function(req, res) {
  passport.authenticate("local")(req, res, function() {
    console.log("Login action successful!");
    res.redirect("/");
  });
};

// logout
authController.logout = function(req, res) {
  req.logout();
  console.log("Logout action successful!");
  res.redirect("/");
};

module.exports = authController;
