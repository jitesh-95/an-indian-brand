const express = require("express");
const ProductsModel = require("../models/Products.model");
const menRouter = express.Router();

menRouter.get("/men", async (req, res) => {
  const { page, sortBy } = req.query;
  const limit = 20;
  const skip = (+page - 1) * limit;

  if (sortBy == "null") {
    const mensProducts = await ProductsModel.find({ category: "men" })
      .skip(skip)
      .limit(limit);
    const totalMensProducts = await ProductsModel.find({ category: "men" });
    if (mensProducts.length > 0) {
      return res.send({
        mensProducts,
        total: totalMensProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "HighToLow") {
    const mensProducts = await ProductsModel.find({ category: "men" })
      .skip(skip)
      .limit(limit)
      .sort({ price: -1 });
    const totalMensProducts = await ProductsModel.find({ category: "men" });
    if (mensProducts.length > 0) {
      return res.send({
        mensProducts,
        total: totalMensProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "LowToHigh") {
    const mensProducts = await ProductsModel.find({ category: "men" })
      .skip(skip)
      .limit(limit)
      .sort({ price: 1 });
    const totalMensProducts = await ProductsModel.find({ category: "men" });
    if (mensProducts.length > 0) {
      return res.send({
        mensProducts,
        total: totalMensProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "A-Z") {
    const mensProducts = await ProductsModel.find({ category: "men" })
      .skip(skip)
      .limit(limit)
      .sort({ name: 1 });
    const totalMensProducts = await ProductsModel.find({ category: "men" });
    if (mensProducts.length > 0) {
      return res.send({
        mensProducts,
        total: totalMensProducts.length,
        response: true,
      });
    }
  }

  if (sortBy === "Z-A") {
    const mensProducts = await ProductsModel.find({ category: "men" })
      .skip(skip)
      .limit(limit)
      .sort({ name: -1 });
    const totalMensProducts = await ProductsModel.find({ category: "men" });
    if (mensProducts.length > 0) {
      return res.send({
        mensProducts,
        total: totalMensProducts.length,
        response: true,
      });
    }
  }

  res.send({ message: "Error", response: false });
});

module.exports = menRouter;
