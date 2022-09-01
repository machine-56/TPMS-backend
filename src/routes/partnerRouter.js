const express = require("express");
const partnerRouter = express.Router();
const partnerdata = require("../model/partnerModel");
const invoiceData = require("../model/invoicedata");
const multer = require("multer");
const path = require("path");

partnerRouter.get("/:id", (req, res) => {
  const uid = req.params.id;
  console.log(`uid: ${uid}`);
  partnerdata.find({ _id: uid }).then((data) => {
    console.log(data);
    res.send(data[0]);
  });
});

partnerRouter.put("/edit", (req, res) => {
  console.log(req.body);
  (id = req.body._id),
    (image = req.body.image),
    (name = req.body.name),
    (uname = req.body.uname),
    (pwd = req.body.pwd),
    (post = req.body.post),
    (pid = req.body.pid),
    (pan = req.body.pan),
    (email = req.body.email),
    (phoneNo = req.body.phoneNo),
    (compname = req.body.compname),
    partnerdata
      .findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            image: image,
            name: name,
            uname: uname,
            pwd: pwd,
            post: post,
            pid: pid,
            pan: pan,
            email: email,
            phoneNo: phoneNo,
            compname: compname,
          },
        }
      )
      .then(function () {
        res.send();
      });
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// partnerRouter.post("/invoice", upload.single("file"), (req, res) => {
//   const invoice = {
//     woid: req.body.woid,
//     invono: req.body.invono,
//     invodate: req.body.invodate,
//     duedate: req.body.duedate,
//     fileUpload: req.file,
//   };
//   console.log(invoice);
//   // const invoiceDetails = new invoicedata(invoice);
//   // invoiceDetails.save();
//   res.json(invoice);
//   // res.send("Saved successfully");
// });

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
  newInvoice
    .save()
    .then((succ) => {
      console.log("New invoice data added");
      res.status(200).json({
        success: true,
        message: "Invoice saved successfully",
      });
    })
    .catch((err) => {
      console.log("Invoice upload failed", error.message);
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
