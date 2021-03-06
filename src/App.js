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

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/mens"
          element={
            <RequireAuth>
              <Mens />
            </RequireAuth>
          }
        />
        <Route
          path="/womens"
          element={
            <RequireAuth>
              <Womens />
            </RequireAuth>
          }
        />
        <Route
          path="/contactus"
          element={
            <RequireAuth>
              <ContactUs />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default App;
