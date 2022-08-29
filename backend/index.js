const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());

const connection = require("./config");
const Authentication = require("./middlewares/Authentication");
const userRouter = require("./controllers/user.controller");

app.use(express.json());
app.use("/user", userRouter);
app.use(Authentication);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connection established");
  } catch (err) {
    console.log("connection error: " + err);
  }
  console.log("listening on port 8080");
});
