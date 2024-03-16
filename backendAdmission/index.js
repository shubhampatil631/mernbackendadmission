import express from "express";
import mongoose from "mongoose";
import cors from "cors";
//import { v4 as uuidv4 } from "uuid";
import UserModel from "./modles/Student.js";
import UserModel1 from "./modles/User.js";
import UserModel2 from "./modles/Admin.js";
import {
  Createstudent,
  getStudent,
  Newupdate,
  DeleteStd,
  checkboxfield,
  Lastpagespicificcdoc,
  Docdept,
  Alldoc,
  Category,
  records,
} from "./route/studentRoute.js";
import {
  CreateAdmin,
  getAllAdmin,
  getAdmins,
  UpdateAdmin,
  DeleteAdmin,
} from "./route/adminRoute.js";
import {
  DeleteUsers,
  CountDoc,
  UpdateUserOnstd,
  UpdateUser,
  CreateUser,
  getAllUsers,
  getUsers,
  getCount,
} from "./route/userRoute.js";
const app = express();
//app.use("/user", userRoute);
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://shubham:kingshubham@cluster1.zswx871.mongodb.net/collegeform"
);

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});
app.post("/getAllAdmin", getAllAdmin);
app.post("/Createstudent", Createstudent);
app.get("/getStudent/:id", getStudent);
app.put("/Newupdate/:id", Newupdate);
app.delete("/DeleteStd/:id", DeleteStd);
app.post("/CreateAdmin", CreateAdmin);
app.post("/CreateUser", CreateUser);

app.get("/getAllUsers", getAllUsers);
app.get("/getAdmins/:id", getAdmins);
app.get("/getUsers/:id", getUsers);
app.get("/getCount", getCount);

app.post("/loginAdmin", async (req, res) => {
  // Use async to await the promise
  const { Username, Password } = req.body;
  try {
    const user = await UserModel2.findOne({
      // Await the promise
      AdminUsername: Username,
      AdminPassword: Password,
    }).exec(); // Execute the query
    console.log(Username, Password);
    if (user) {
      res.json({
        success: true,
        message: "Login successful",
        AdminDepartment: user.AdminDepartment,
        AdminContactNo: user.AdminContactNo,
      });
      console.log("Login successful");
    } else {
      res.json({ success: false, message: "Invalid credentials" });
      console.log("Invalid credentials");
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});
app.post("/loginUser", async (req, res) => {
  // Use async to await the promise
  const { Username, Password } = req.body;
  try {
    const user = await UserModel1.findOne({
      // Await the promise
      UserUsername: Username,
      UserPassword: Password,
    });

    console.log(Username, Password);

    if (user) {
      res.json({
        success: true,
        message: "Login successful",
        UserDepartment: user.UserDepartment,
        UserContactNo: user.UserContactNo,
      });
      console.log("Login successful");
    } else {
      res.json({ success: false, message: "Invalid credentials" });
      console.log("Invalid credentials");
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.put("/UpdateAdmin/:id", UpdateAdmin);
app.put("/UpdateUser/:id", UpdateUser);
app.put("/UpdateUserOnstd", UpdateUserOnstd);
app.post("/CountDoc", CountDoc);
app.delete("/DeleteAdmin/:id", DeleteAdmin);
app.delete("/DeleteUsers/:id", DeleteUsers);
app.get("/records", records);
app.get("/Category", Category);
app.get("/Alldoc", Alldoc);
app.get("/Docdept", Docdept);
app.post("/search/:searchKey", async (req, res) => {
  console.log(req.params.searchKey);
  try {
    const results = await UserModel.find({
      $or: [
        { NameofCandidate: { $regex: new RegExp(req.params.searchKey, "i") } },
        { Category: { $regex: new RegExp(req.params.searchKey, "i") } },
        { ReservedCategory: { $regex: new RegExp(req.params.searchKey, "i") } },
        { Domicile: { $regex: new RegExp(req.params.searchKey, "i") } },
        { District: { $regex: new RegExp(req.params.searchKey, "i") } },
        { Address: { $regex: new RegExp(req.params.searchKey, "i") } },
        { Religion: { $regex: new RegExp(req.params.searchKey, "i") } },
        { Caste: { $regex: new RegExp(req.params.searchKey, "i") } },
        { Gender: { $regex: new RegExp(req.params.searchKey, "i") } },
        { LastSchool: { $regex: new RegExp(req.params.searchKey, "i") } },
        { StudentCategory: { $regex: new RegExp(req.params.searchKey, "i") } },
        { HandicapType: { $regex: new RegExp(req.params.searchKey, "i") } },
        { DefenceType: { $regex: new RegExp(req.params.searchKey, "i") } },
        { Branch: { $regex: new RegExp(req.params.searchKey, "i") } },
        { TypeofCandidiate: { $regex: new RegExp(req.params.searchKey, "i") } },
        { SODOMrMiss: { $regex: new RegExp(req.params.searchKey, "i") } },
        { Deponent: { $regex: new RegExp(req.params.searchKey, "i") } },
      ],
    });
    res.json(results);
    console.log(results); // Sending the array directly
  } catch (error) {
    console.error("Error during the search:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/Lastpagespicificcdoc", Lastpagespicificcdoc);
app.post("/checkboxfield", checkboxfield);

app.listen(5050, () => {
  console.log("server is runing");
});
