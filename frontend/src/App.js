import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div>
      <Navbar />

      <MainRoutes />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
