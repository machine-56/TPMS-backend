const express = require('express');
const signupRouter = express.Router();
const newUserdata = require('../model/newuserModel');

signupRouter.post('/',(req,res)=>{
    let newUser={
        fname: req.body.fname,
        lname: req.body.lname,
        uname: req.body.uname,
        email: req.body.email,
        phoneNo: req.body.phno,
        pwd: req.body.pwd,
        positiion:req.body.post
    }
    console.log(newUser);
    const user = new newUserdata(newUser);
    user.save();
    res.status(200).send()
})