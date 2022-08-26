const express = require("express");
const partnerRouter = express.Router();
const partnerdata = require("../model/partnerModel");

partnerRouter.get("/edit", (req, res) => {
  console.log("rec");

  // const uid = req.params.id;
  // console.log(`uid: ${uid}`);
  //   partnerdata.find({ _id: uid }).then((data) => {
  //     console.log(data);
  //     res.send(data);
  //   });
});

// partnerRouter.put("/", (req, res) => {
//   console.log(req.body);
//   (id = req.body._id),
//     (name = req.body.name),
//     (username = req.body.username),
//     (pwd = req.body.pwd),
//     (post = req.body.post),
//     (id = req.body.id),
//     (pan = req.body.pan),
//     (email = req.body.email),
//     (phno = req.body.phno),
//     (company = req.body.company),
//     partnerdata
//       .findByIdAndUpdate(
//         { _id: id },
//         {
//           $set: {
//             name: name,
//             username: username,
//             pwd: pwd,
//             post: post,
//             id: id,
//             pan: pan,
//             email: email,
//             phno: phno,
//             company: company,
//           },
//         }
//       )
//       .then(function () {
//         res.send();
//       });
// });

module.exports = partnerRouter;
