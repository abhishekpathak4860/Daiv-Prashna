import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Yoga from "./pages/Yoga";
import Astrology from "./pages/Astrology";
import Pooja from "./pages/Pooja";
import Shradha from "./pages/Shradha";
import Vastu from "./pages/Vastu";
import Payment from "./pages/Payment";
import Lineage from "./pages/Lineage";
import Mission from "./pages/Mission";
import Sadanand from "./pages/Sadanand";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import ReturnPage from "./pages/ReturnPage";
import ShippingPage from "./pages/ShippingPage";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import FoundersPage from "./pages/Founder";
import TestimonialDetail from "./pages/TestimonialDetail";
import MediaDetail from "./pages/MediaDetail";
import ArticlesDetails from "./pages/ArticlesDetails";
import LineageDetail from "./pages/LineageDetail";
import PaymentEmailSent from "./pages/PaymentEmailSent";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/pooja" element={<Pooja />} />
          <Route path="/shraddha" element={<Shradha />} />
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/emailsent" element={<PaymentEmailSent />} />
          <Route path="/lineage" element={<Lineage />} />
          <Route path="/details/:label" element={<LineageDetail />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/sadanand" element={<Sadanand />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/return_refund" element={<ReturnPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/founder" element={<FoundersPage />} />
          <Route path="/testimonial/:id" element={<TestimonialDetail />} />
          <Route path="/media/:id" element={<MediaDetail />} />
          <Route path="/article/:id" element={<ArticlesDetails />} />
          <Route path="/detail/:id" element={<LineageDetail />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
