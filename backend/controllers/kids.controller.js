const express = require("express");
const ProductsModel = require("../models/Products.model");
const kidsRouter = express.Router();

kidsRouter.get("/kids", async (req, res) => {
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
    const kidsProducts = await ProductsModel.find({ category: "kids" })
      .skip(skip)
      .limit(limit)
      .sort([[sortBy, order]]);
    const totalKidsProducts = await ProductsModel.countDocuments({
      category: "kids",
    });

    return res.send({
      kidsProducts,
      total: totalKidsProducts,
      response: true,
    });
  } catch (err) {
    res.send({ message: err, response: false });
  }
});

module.exports = kidsRouter;
