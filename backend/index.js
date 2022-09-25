const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());

const connection = require("./config");
const Authentication = require("./middlewares/Authentication");
const userRouter = require("./controllers/user.controller");
const menRouter = require("./controllers/men.controller");
const womenRouter = require("./controllers/women.controller");
const kidsRouter = require("./controllers/kids.controller");
const cartRouter = require("./controllers/cart.controller");
const orderRouter = require("./controllers/order.controller");
const wishlistRouter = require("./controllers/wishlist.controller");

app.use(express.json());
app.use("/user", userRouter);
app.use("/products", menRouter);
app.use("/products", womenRouter);
app.use("/products", kidsRouter);

app.use(Authentication);
app.use("/cart", cartRouter);
app.use("/orders", orderRouter);
app.use("/wishlist", wishlistRouter);

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
