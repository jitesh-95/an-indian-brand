const express = require("express");
const ProductsModel = require("../models/Products.model");
const kidsRouter = express.Router();

kidsRouter.get("/kids", async (req, res) => {
  const { page, sortBy } = req.query;
  const limit = 20;
  const skip = (+page - 1) * limit;

  if (sortBy == "null") {
    const kidsProducts = await ProductsModel.find({ category: "kids" })
      .skip(skip)
      .limit(limit);
    const totalKidsProducts = await ProductsModel.find({ category: "kids" });
    if (kidsProducts.length > 0) {
      return res.send({
        kidsProducts,
        total: totalKidsProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "HighToLow") {
    const kidsProducts = await ProductsModel.find({ category: "kids" })
      .skip(skip)
      .limit(limit)
      .sort({ price: -1 });
    const totalKidsProducts = await ProductsModel.find({ category: "kids" });
    if (kidsProducts.length > 0) {
      return res.send({
        kidsProducts,
        total: totalKidsProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "LowToHigh") {
    const kidsProducts = await ProductsModel.find({ category: "kids" })
      .skip(skip)
      .limit(limit)
      .sort({ price: 1 });
    const totalKidsProducts = await ProductsModel.find({ category: "kids" });
    if (kidsProducts.length > 0) {
      return res.send({
        kidsProducts,
        total: totalKidsProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "A-Z") {
    const kidsProducts = await ProductsModel.find({ category: "kids" })
      .skip(skip)
      .limit(limit)
      .sort({ name: 1 });
    const totalKidsProducts = await ProductsModel.find({ category: "kids" });
    if (kidsProducts.length > 0) {
      return res.send({
        kidsProducts,
        total: totalKidsProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "Z-A") {
    const kidsProducts = await ProductsModel.find({ category: "kids" })
      .skip(skip)
      .limit(limit)
      .sort({ name: -1 });
    const totalKidsProducts = await ProductsModel.find({ category: "kids" });
    if (kidsProducts.length > 0) {
      return res.send({
        kidsProducts,
        total: totalKidsProducts.length,
        response: true,
      });
    }
  }

  res.send({ message: "Error", response: false });
});

module.exports = kidsRouter;
