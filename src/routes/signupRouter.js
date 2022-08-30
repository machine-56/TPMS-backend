const express = require("express");
const signupRouter = express.Router();
const newUserdata = require("../model/newuserModel");
// const partnerData = require("../model/partnerModel");

signupRouter.post("/", (req, res) => {
  // console.log(req);
  var newUser = {
    name: req.body.fullname,
    uname: req.body.uname,
    email: req.body.email,
    pwd: req.body.pwd,
    phoneNo: req.body.phoneNo,
    compname: req.body.compname,
    post: req.body.post,
    approve: req.body.approve,
  };
  console.log(newUser);
  const user = new newUserdata(newUser);
  user.save();

  res.status(200).send();
});
// partner deatials sort out

// if (newUser.post == "Partner" && newUser.approve ==true ) {
//   const partner = new partnerData(newUser);
//   partner.save();
// }

module.exports = signupRouter;
