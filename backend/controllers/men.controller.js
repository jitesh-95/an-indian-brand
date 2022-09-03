const express = require("express");
const ProductsModel = require("../models/Products.model");
const menRouter = express.Router();

menRouter.get("/men", async (req, res) => {
  const { page } = req.query;
  // console.log(page);
  const limit = 20;
  const skip = (+page - 1) * limit;
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
  res.send({ message: "Error", response: false });
});

module.exports = menRouter;
