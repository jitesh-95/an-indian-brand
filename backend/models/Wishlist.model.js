const mongoose = require("mongoose");

const WishlistSchema = mongoose.Schema({
  name: String,
  image: String,
  productId: String,
  userId: String,
});

const WishlistModel = mongoose.model("wishListItem", WishlistSchema);

module.exports = WishlistModel;
