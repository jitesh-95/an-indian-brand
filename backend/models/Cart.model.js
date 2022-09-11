const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  size: String,
  quantity: Number,
  category: String,
  userId: String,
});

const CartModel = mongoose.model("cartItem", CartSchema);

module.exports = CartModel;
