const express = require("express");
const ProductsModel = require("../models/Products.model");
const kidsRouter = express.Router();

kidsRouter.get("/kids", async (req, res) => {
  const kidsProducts = await ProductsModel.find({ category: "kids" }).limit(20);
  const totalKidsProducts = await ProductsModel.find({ category: "kids" });
  if (kidsProducts.length > 0) {
    return res.send({
      kidsProducts,
      total: totalKidsProducts.length,
      response: true,
    });
  }
  res.send({ message: "Error", response: false });
});

module.exports = kidsRouter;
