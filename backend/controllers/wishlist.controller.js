const express = require("express");
const WishlistModel = require(".././models/Wishlist.model");
const wishlistRouter = express.Router();

wishlistRouter.get("/", async (req, res) => {
  const { userId } = req.body;
  const wishlistProducts = await WishlistModel.find({ userId });
  res.send({ wishlistProducts, response: true });
});

wishlistRouter.post("/addToWishlist", async (req, res) => {
  const { name, image, productId, userId } = req.body;
  const alreadyExist = await WishlistModel.findOne({
    userId,
    productId,
  });
  if (alreadyExist) {
    return res.send({ message: "Already added", response: false });
  }
  const item = WishlistModel({
    name,
    image,
    productId,
    userId,
  });
  await item.save();
  res.send({ message: "Added", response: true });
});

wishlistRouter.delete("/delete/:itemId", async (req, res) => {
  const { userId } = req.body;
  const id = req.params.itemId;
  const item = await WishlistModel.findOne({ userId, id });
  if (!item) {
    return res.send({ message: "Item not found", response: false });
  }
  await WishlistModel.findByIdAndDelete(id);
  const wishlistProducts = await WishlistModel.find({ userId });
  res.send({ wishlistProducts, message: "Deleted", response: true });
});

module.exports = wishlistRouter;
