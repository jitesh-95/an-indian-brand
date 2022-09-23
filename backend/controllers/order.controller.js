const express = require("express");
const OrderModel = require(".././models/Orders.model");
const orderRouter = express.Router();

orderRouter.get("/", async (req, res) => {
  const { userId } = req.body;
  const ordersData = await OrderModel.find({ userId });
  res.send({ ordersData, response: true });
});

orderRouter.post("/addToOrders", async (req, res) => {
  const { date, order, userId } = req.body;

  const item = OrderModel({
    date: date,
    order: order,
    userId: userId,
  });
  //   console.log(date, order, userId);
  await item.save();
  res.send({ message: "Added", response: true });
});

module.exports = orderRouter;
