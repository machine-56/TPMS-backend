const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const userdata = require("../model/userModel");
// const newuser=require("../model/newuserModel")

loginRouter.post("/", (req, res) => {
  let retnvalue = {
    token: "",
    post: "",
  };
  let user = req.body;
  var flag = false;
  userdata.find().then((checkusr) => {
    for (let i = 0; i < userdata.length; i++) {
      if (checkusr[i].uname == user.uname && checkusr[i].pwd == user.pwd) {
        retnvalue.post = checkusr[i].post;
        flag = true;
        break;
      } else if (i == userdata.length - 1) {
        flag == false;
      }
    }
    if (flag != false) {
      let payload = { subject: user.name + user.pwd };
      let token = jwt.sign(payload, "secrectkey");
      retnvalue.token = token;
      res.status(200).send({ retnvalue });
    }
  });
});
module.exports = loginRouter;
