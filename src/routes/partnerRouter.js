const express = require("express");
const partnerRouter = express.Router();
const partnerdata = require("../model/partnerModel");
const invoiceData = require("../model/invoicedata");
const multer = require("multer");
const path = require("path");

partnerRouter.get("/:id", (req, res) => {
  const uid = req.params.id;
  console.log(`uid: ${uid}`);
  partnerdata.findOne({ "uname": uid }).then((data) => {
    console.log(`backend ${data}`);
    res.send(data);
  });
});

partnerRouter.put("/edit", (req, res) => {
  console.log(req.body);
  (id = req.body._id),
    (image = req.body.image),
    (user = req.body.name),
    (uname = req.body.uname),
    (pwd = req.body.pwd),
    (post = req.body.post),
    (partner_id = req.body.partner_id),
    (pan = req.body.pan),
    (email = req.body.email),
    (phoneNo = req.body.phoneNo),
    (company = req.body.company),
    partnerdata
      .findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            name: user,
            uname: uname,
            pwd: pwd,
            post: post,
            email: email,
            partner_id: partner_id,
            image: image,
            pan: pan,
            phoneNo: phoneNo,
            company: company,
          },
        }
      )
      .then(function () {
        res.send();
      });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

var multipleUpload = multer({ storage: storage }).array("files");

partnerRouter.post("/invoice", function (req, res) {
  var newInvoice = new invoiceData(req.body);
  newInvoice.save()
    .then((succ) => {
      console.log(`backend: New invoice data added ${succ}`);  //======
      res.status(200).json({
        success: true,
        message: "Invoice saved successfully",
      });
    })
    .catch((err) => {
      console.log("Invoice upload failed", error.message);  //========
    });
});

partnerRouter.post("/multifiles", (req, res) => {
  multipleUpload(req, res, (err) => {
    if (err) {
      console.log(err.message);
    }

    let img = [];
    req.files.forEach((file) => {
      img.push(file.filename);
    });

    res.json({
      path: img,
    });
  });
});

module.exports = partnerRouter;
