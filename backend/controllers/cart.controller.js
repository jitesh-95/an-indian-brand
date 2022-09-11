const express = require("express");
const CartModel = require(".././models/Cart.model");
const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  const { userId } = req.body;
  const cartProducts = await CartModel.find({ userId });
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

cartRouter.delete("/delete/:itemId", async (req, res) => {
  const { userId } = req.body;
  const id = req.params.itemId;
  const item = await CartModel.findOne({ userId, id });
  if (!item) {
    return res.send({ message: "Item not found", response: false });
  }
  await CartModel.findByIdAndDelete(id);
  const newProducts = await CartModel.find({ userId });
  res.send({ newProducts, message: "Deleted", response: true });
});

cartRouter.patch("/update/:itemId", async (req, res) => {
  const { userId, quantity } = req.body;
  const id = req.params.itemId;
  const item = await CartModel.findOne({ userId, id });
  if (!item) {
    return res.send({ message: "Item not found", response: false });
  }
  const updatedProducts = await CartModel.updateOne(
    { id: id },
    { quantity: quantity }
  );
  // console.log(id);
  return res.send({ message: "working", response: false });
});

module.exports = cartRouter;
