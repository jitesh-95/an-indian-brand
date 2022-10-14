const express = require("express");
const ProductsModel = require("../models/Products.model");
const menRouter = express.Router();

menRouter.get("/men", async (req, res) => {
  const page = req.query.page || 1;
  let order = req.query.urlSort || "asc";
  let sortBy = "_id";

  if (order === "HighToLow") {
    order = "desc";
    sortBy = "price";
  } else if (order === "LowToHigh") {
    order = "asc";
    sortBy = "price";
  } else if (order === "A-Z") {
    order = "asc";
    sortBy = "name";
  } else if (order === "Z-A") {
    order = "desc";
    sortBy = "name";
  }

  const limit = 20;
  const skip = (+page - 1) * limit;
  try {
    const mensProducts = await ProductsModel.find({ category: "men" })
      .skip(skip)
      .limit(limit)
      .sort([[sortBy, order]]);
    const totalMensProducts = await ProductsModel.countDocuments({
      category: "men",
    });
    return res.send({
      mensProducts,
      total: totalMensProducts,
      response: true,
    });
  } catch (err) {
    res.send({ message: err, response: false });
  }
});

module.exports = menRouter;
