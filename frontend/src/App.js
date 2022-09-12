import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Footer from "./components/Footer";
import Signup from "./Pages/Signup";
import RequireAuth from "./hoc/RequireAuth";
import ContactUs from "./Pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import Kids from "./Pages/Kids";
import Description from "./Pages/Description";
import Payment from "./Pages/Payment";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <div className="">
      <Navbar />

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
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
