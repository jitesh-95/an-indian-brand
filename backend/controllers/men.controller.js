const express = require("express");
const ProductsModel = require("../models/Products.model");
const menRouter = express.Router();

menRouter.get("/men", async (req, res) => {
  const mensProducts = await ProductsModel.find({ category: "men" }).limit(20);
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
