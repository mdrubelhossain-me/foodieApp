import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import BackToTopButton from "./Component/BackToTopButton/BackToTopButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import FoodDetails from "./Component/FoodDetails/FoodDetails";
import Checkout from "./Pages/Checkout/Checkout";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginSingup" element={<LoginSignup />} />
          <Route path="/food/:id" element={<FoodDetails />} /> 
          <Route path="/checkout"  element={<Checkout/>}></Route>
        </Routes>
        <BackToTopButton />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
