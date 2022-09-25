const mongoose = require("mongoose");

const WishlistSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  category: String,
  code: String,
  sizes: Array,
  userId: String,
});

const WishlistModel = mongoose.model("wishListItem", WishlistSchema);

module.exports = WishlistModel;
