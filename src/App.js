import "./assets/css/bootstrap.min.css";
import "./assets/css/flex-slider.css";
import "./assets/css/font-awesome.css";
import "./assets/css/lightbox.css";
import "./assets/css/owl-carousel.css";
import "./assets/css/templatemo-klassy-cafe.css";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import About from "./Component/About";
// import Special from "./Component/Special";
import Chef from "./Component/Chef";
import Contact from "./Component/Contact";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import Popup from "./Component/Popup";
import LoyalityRegistration from "./Component/LoyalityRegistration";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SeeMore from "./pages/SeeMore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                {/* <Popup /> */}
                <Banner />
                <About />
                <Menu />
                {/* <Special /> */}
                <Chef />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/asd"
            element={
              <>
                <LoyalityRegistration />
              </>
            }
          />
          <Route path="/food/:foodcategory" element={<SeeMore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
