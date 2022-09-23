import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../hoc/RequireAuth";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ContactUs from "./ContactUs";
import Description from "./Description";
import Home from "./Home";
import Kids from "./Kids";
import Login from "./Login";
import Mens from "./Mens";
import Orders from "./Orders";
import Payment from "./Payment";
import Signup from "./Signup";
import Womens from "./Womens";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/description/:ProductId" element={<Description />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />
      <Route
        path="/payment"
        element={
          <RequireAuth>
            <Payment />
          </RequireAuth>
        }
      />
      <Route
        path="/checkout"
        element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }
      />
      <Route
        path="/orders"
        element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
