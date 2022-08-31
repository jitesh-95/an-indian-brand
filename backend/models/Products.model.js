const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  category: String,
  code: String,
  sizes: Array,
});

const ProductsModel = mongoose.model("data", ProductsSchema);

module.exports = ProductsModel;
