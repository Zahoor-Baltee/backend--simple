// let user = [{}];

const express = require("express");
const app = express();
const mongoos = require("mongoose");
const userRoute = require("./routes/userRoutes.js")
const cors = require("cors")
app.use(cors({
  origin:"http://localhost:3000",
}))
mongoos.connect(
  "mongodb+srv://ZahoorAbbas:zahoor1122@cluster0.ytybjc4.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successfull");
    }
  }
);
app.use(express.json());

app.use("/user",userRoute)
// user page
// app.get("/users", (req, res) => {
//   res.send(user).status(200);
// });

// app.get("/users/:id", (req, res) => {
//   let obj = user.find((x) => x.id == req.params.id);
//   if (!obj) {
//     res.send("No Data Found").status(404);
//   } else {
//     res.send(obj).status(200);
//   }
// });

// app.post("/users", (req, res) => {
//   let { name, email } = req.body;

//   if (!name) {
//     res.send("Required: Name").status(400);
//     return;
//   }

//   if (!email) {
//     res.send("Required: Email").status(400);
//     return;
//   }

//   let obj = {
//     name,
//     email,
//     dateTime: new Date(),
//     id: user.length + 1,
//   };
//   user.push(obj);
//   res.send(obj).status(200);
// });

// app.put("/users/:id", (req, res) => {
//   let obj = user.find((x) => x.id == req.params.id);
//   if (!obj) {
//     res.send("Data Not Found").status(400);
//     return;
//   }
//   if (obj) {
//     let i = user.findIndex((x) => x.id == req.params.id);
//     user[i] = { ...user[i], ...req.body };
//     res.send(user[i]).status(200);
//     return;
//   }
// });

// app.delete("/users/:id", (req, res) => {
//   let i = user.findIndex((x) => x.id == req.params.id);
//   if (i != -1) {
//     user.splice(i, 1);
//     res.send("successfully Deleted").status(200);
//   }
// });

// //course page
// let course=[{}]
// app.get("/course", (req, res) => {
//   res.send(course).status(200);
// });

// app.get("/course/:id", (req, res) => {
//   let obj = course.find((x) => x.id == req.params.id);
//   if (!obj) {
//     res.send("No Data Found").status(404);
//   } else {
//     res.send(obj).status(200);
//   }
// });

// app.post("/course", (req, res) => {
//   let { course, year } = req.body;

//   if (!course) {
//     res.send("Required: Course Name").status(400);
//     return;
//   }

//   if (!email) {
//     res.send("Required: Email").status(400);
//     return;
//   }
//   if (!year) {
//     res.send("Required: Year").status(400);
//     return;
//   }

//   let obj = {
//     name,
//     year,
//     email,
//     course,
//     dateTime: new Date(),
//     id: user.length + 1,
//   };
//   course.push(obj);
//   res.send(obj).status(200);
// });

// app.put("/course/:id", (req, res) => {
//   let obj = course.find((x) => x.id == req.params.id);
//   if (!obj) {
//     res.send("Data Not Found").status(400);
//     return;
//   }
//   if (obj) {
//     let i = course.findIndex((x) => x.id == req.params.id);
//     course[i] = { ...course[i], ...req.body };
//     res.send(course[i]).status(200);
//     return;
//   }
// });

// app.delete("/course/:id", (req, res) => {
//   let i = course.findIndex((x) => x.id == req.params.id);
//   if (i != -1) {
//     course.splice(i, 1);
//     res.send("successfully Deleted").status(200);
//   }
// });

// // student page
// let student=[{}]
// app.get("/student", (req, res) => {
//   res.send(student).status(200);
// });

// app.get("/student/:id", (req, res) => {
//   let obj = student.find((x) => x.id == req.params.id);
//   if (!obj) {
//     res.send("No Data Found").status(404);
//   } else {
//     res.send(obj).status(200);
//   }
// });

// app.post("/student", (req, res) => {
//   let { name, email,institude } = req.body;

//   if (!name) {
//     res.send("Required: Name").status(400);
//     return;
//   }

//   if (!email) {
//     res.send("Required: Email").status(400);
//     return;
//   }
//   if (!institude) {
//     res.send("Required: Institude").status(400);
//     return;
//   }

//   let obj = {
//     name,
//     email,
//     institude,
//     dateTime: new Date(),
//     id: user.length + 1,
//   };
//   student.push(obj);
//   res.send(obj).status(200);
// });

// app.put("/student/:id", (req, res) => {
//   let obj = student.find((x) => x.id == req.params.id);
//   if (!obj) {
//     res.send("Data Not Found").status(400);
//     return;
//   }
//   if (obj) {
//     let i = student.findIndex((x) => x.id == req.params.id);
//     student[i] = { ...student[i], ...req.body };
//     res.send(student[i]).status(200);
//     return;
//   }
// });

// app.delete("/student/:id", (req, res) => {
//   let i = student.findIndex((x) => x.id == req.params.id);
//   if (i != -1) {
//     student.splice(i, 1);
//     res.send("successfully Deleted").status(200);
//   }
// });

app.listen(5000);


