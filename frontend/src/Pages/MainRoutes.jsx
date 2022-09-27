import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../hoc/RequireAuth";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Description from "./Description";
import Home from "./Home";
import Kids from "./Kids";
import Login from "./Login";
import Mens from "./Mens";
import Orders from "./Orders";
import Payment from "./Payment";
import Signup from "./Signup";
import Womens from "./Womens";
import WishList from "./WishList";
import { AnimatePresence } from "framer-motion";
import Transition from "../hoc/Transition";

const MainRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/"
          element={
            <Transition>
              <Home />
            </Transition>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Transition>
              <AboutUs />
            </Transition>
          }
        />
        <Route
          path="/login"
          element={
            <Transition>
              <Login />
            </Transition>
          }
        />
        <Route
          path="/signup"
          element={
            <Transition>
              <Signup />
            </Transition>
          }
        />
        <Route
          path="/mens"
          element={
            <Transition>
              <Mens />
            </Transition>
          }
        />
        <Route
          path="/womens"
          element={
            <Transition>
              <Womens />
            </Transition>
          }
        />
        <Route
          path="/kids"
          element={
            <Transition>
              <Kids />
            </Transition>
          }
        />
        <Route
          path="/description/:ProductId"
          element={
            <Transition>
              <Description />
            </Transition>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Transition>
                <Cart />
              </Transition>
            </RequireAuth>
          }
        />
        <Route
          path="/payment"
          element={
            <RequireAuth>
              <Transition>
                <Payment />
              </Transition>
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Transition>
                <Checkout />
              </Transition>
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Transition>
                <Orders />
              </Transition>
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Transition>
                <WishList />
              </Transition>
            </RequireAuth>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
