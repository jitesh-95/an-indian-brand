const express = require("express");
const ProductsModel = require("../models/Products.model");
const womenRouter = express.Router();

womenRouter.get("/women", async (req, res) => {
  const { page } = req.query;
  // console.log(page);
  const limit = 20;
  const skip = (+page - 1) * limit;

  const womensProducts = await ProductsModel.find({ category: "women" })
    .skip(skip)
    .limit(limit);
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
