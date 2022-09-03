const express = require("express");
const ProductsModel = require("../models/Products.model");
const womenRouter = express.Router();

womenRouter.get("/women", async (req, res) => {
  const { page, sortBy } = req.query;
  const limit = 20;
  const skip = (+page - 1) * limit;

  if (sortBy == "null") {
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
  }

  if (sortBy === "HighToLow") {
    const womensProducts = await ProductsModel.find({ category: "women" })
      .skip(skip)
      .limit(limit)
      .sort({ price: -1 });
    const totalWomesProducts = await ProductsModel.find({ category: "women" });
    if (womensProducts.length > 0) {
      return res.send({
        womensProducts,
        total: totalWomesProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "LowToHigh") {
    const womensProducts = await ProductsModel.find({ category: "women" })
      .skip(skip)
      .limit(limit)
      .sort({ price: 1 });
    const totalWomesProducts = await ProductsModel.find({ category: "women" });
    if (womensProducts.length > 0) {
      return res.send({
        womensProducts,
        total: totalWomesProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "A-Z") {
    const womensProducts = await ProductsModel.find({ category: "women" })
      .skip(skip)
      .limit(limit)
      .sort({ name: 1 });
    const totalWomesProducts = await ProductsModel.find({ category: "women" });
    if (womensProducts.length > 0) {
      return res.send({
        womensProducts,
        total: totalWomesProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "Z-A") {
    const womensProducts = await ProductsModel.find({ category: "women" })
      .skip(skip)
      .limit(limit)
      .sort({ name: -1 });
    const totalWomesProducts = await ProductsModel.find({ category: "women" });
    if (womensProducts.length > 0) {
      return res.send({
        womensProducts,
        total: totalWomesProducts.length,
        response: true,
      });
    }
  }
  res.send({ message: "Error", response: false });
});

module.exports = womenRouter;
