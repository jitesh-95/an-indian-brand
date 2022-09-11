const express = require("express");
const CartModel = require(".././models/Cart.model");
const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  const user = req.body.userId;
  const cartProducts = await CartModel.find({ user });
  res.send({ cartProducts, response: true });
});

cartRouter.post("/addToCart", async (req, res) => {
  const { name, image, price, size, quantity, category, userId } = req.body;
  const alreadyExist = await CartModel.findOne({
    name,
    userId,
    category,
    price,
    size,
  });
  if (alreadyExist) {
    return res.send({ message: "Already added", response: false });
  }
  const item = CartModel({
    name: name,
    image: image,
    price: price,
    size: size,
    quantity: quantity,
    category: category,
    userId: userId,
  });
  await item.save();
  res.send({ message: "Added", response: true });
});

module.exports = cartRouter;
