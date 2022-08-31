const express = require("express");
const ProductsModel = require("../models/Products.model");
const womenRouter = express.Router();

womenRouter.get("/women", async (req, res) => {
  const womensProducts = await ProductsModel.find({ category: "women" }).limit(
    20
  );
  const totalWomesProducts = await ProductsModel.find({ category: "women" });
  if (womensProducts.length > 0) {
    return res.send({
      womensProducts,
      total: totalWomesProducts.length,
      response: true,
    });
  }
  res.send({ message: "Error", response: false });
});

module.exports = womenRouter;
