const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");

userRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const exesting_user = await UserModel.findOne({ email });
  if (exesting_user) {
    return res.send({
      message: "Exists",
      response: false,
    });
  }

  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) return res.send({ message: "Please try again", response: false });
    const user = new UserModel({
      email,
      password: hash,
    });
    await user.save();
    res.send({ message: "Done", response: true });
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.send({ message: "Not Exixts", response: false });
  }

  const hash = user.password;
  const userId = user.id;
  const SECRET_KEY = process.env.SECRET_KEY;

  bcrypt.compare(password, hash, async function (err, result) {
    if (err) return res.send({ message: "Please try again", response: false });
    if (result) {
      const token = await jwt.sign(
        { email: user.email, id: userId },
        SECRET_KEY,
        { expiresIn: "24h" }
      );
      return res.send({ message: "Done", token, response: true });
    }
    return res.send({ message: "Error", response: false });
  });
});

module.exports = userRouter;
