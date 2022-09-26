import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import WishList from "./WishList";
import { AnimatePresence } from "framer-motion";
import Transition from "../hoc/Transition";

const MainRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
          path="/contactus"
          element={
            <Transition>
              <ContactUs />
            </Transition>
          }
        />
        <Route
          path="/cart"
          element={
            <Transition>
              <RequireAuth>
                <Cart />
              </RequireAuth>
            </Transition>
          }
        />
        <Route
          path="/payment"
          element={
            <Transition>
              <RequireAuth>
                <Payment />
              </RequireAuth>
            </Transition>
          }
        />
        <Route
          path="/checkout"
          element={
            <Transition>
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            </Transition>
          }
        />
        <Route
          path="/orders"
          element={
            <Transition>
              <RequireAuth>
                <Orders />
              </RequireAuth>
            </Transition>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Transition>
              <RequireAuth>
                <WishList />
              </RequireAuth>
            </Transition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
