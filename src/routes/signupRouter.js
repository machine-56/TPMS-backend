const express = require("express");
const signupRouter = express.Router();
const newUserdata = require("../model/newuserModel");

signupRouter.post("/", (req, res) => {
  var newUser = {
    name: req.body.fullname,
    uname: req.body.uname,
    email: req.body.email,
    pwd: req.body.pwd,
    phoneNo: req.body.phoneNo,
    compname: req.body.compname,
    post: req.body.post,
  };
  console.log(newUser);
  const user = new newUserdata(newUser);
  user.save();
  res.status(200).send();
});

module.exports = signupRouter;