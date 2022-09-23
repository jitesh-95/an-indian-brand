const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  order: Array,
  date: String,
  userId: String,
});

const OrderModel = mongoose.model("orderItem", OrderSchema);

module.exports = OrderModel;
