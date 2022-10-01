// const express = require("express");
// const app = express();
// const { route } = require("express");
// const router = express.Router();

// const userModel = require("../model/userModel.js");

// router.get("/", (req, res) => {
//   userModel.find({}, (err, data) => {
//     if (err) {
//       res.send(err).status(404);
//     } else {
//       res.send(data).status(200);
//     }
//   });
// });
// router.get("/:id", (req, res) => {
//     let id = req.params.id;
//     userModel.find({_id:id}, (err, data) => {
//         if (err) {
//           res.send(err).status(404);
//         } else {
//           res.send(data).status(200);
//         }
//       });
// });
// router.post("/", (req, res) => {
//   const { userName, email, password } = req.body;

//   let errArr = [];
//   if (!userName) {
//     errArr.push("Required : UserName");
//   }
//   if (!email) {
//     errArr.push("Required : Email");
//   }
//   if (!password) {
//     errArr.push("Required : Password");
//   }

//   if (errArr && errArr.length > 0) {
//     res.send(errArr).status(404);
//     return;
//   }

//   let userObj = new userModel({
//     userName,
//     email,
//     password,
//     createdAt: new Date(),
//   });
//   userObj.save((err,result)=>{
//     if(err){
//         res.send(err).status(404);
//     } else {
//         res.send(result).status(200);
//     }
//   })
// });
// router.put("/:id", (req, res) => {});
// router.delete("/:id", (req, res) => {});

// module.exports = router;
