import express from "express";
import UserModel1 from "../modles/User.js";
import UserModel from "../modles/Student.js";
const router = express.Router();

export function CreateUser(req, res) {
  UserModel1.create({
    UserUsername: req.body.Username,
    UserPassword: req.body.Password,
    UserDepartment: req.body.Department,
    UserContactNo: req.body.ContactNo,
  })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
export function getAllUsers(req, res) {
  UserModel1.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}

export function getUsers(req, res) {
  const id = req.params.id;
  UserModel1.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
export function UpdateUser(req, res) {
  const id = req.params.id;
  UserModel1.findByIdAndUpdate(
    { _id: id },
    {
      UserUsername: req.body.UserUsername,
      UserPassword: req.body.UserPassword,
      UserDepartment: req.body.UserDepartment,
      UserContactNo: req.body.UserContactNo,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}

export function getCount(req, res) {
  const { username } = req.query;
  console.log(username);
  UserModel.find({ SubmitedUsername: username })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
}

export function UpdateUserOnstd(req, res) {
  const { SubmitedUsername, UserUsername, SubmitedDepartment, UserDepartment } =
    req.body;
  UserModel.updateMany(
    {
      SubmitedUsername: SubmitedUsername,
      SubmitedDepartment: SubmitedDepartment,
    },
    {
      SubmitedUsername: UserUsername,
      SubmitedDepartment: UserDepartment,
    },
    { new: true } // This option returns the modified document rather than the original
  )
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => res.status(400).json(err));
}
export function CountDoc(req, res) {
  try {
    const { SubmitedUsername } = req.body;
    const count = UserModel.countDocuments({ SubmitedUsername });
    console.log({ count });
    res.json({ count });
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ error: "An error occurred while counting documents" });
  }
}
export function DeleteUsers(req, res) {
  const id = req.params.id;
  UserModel1.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}
