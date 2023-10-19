import React, { useState } from "react";
import MainScreen from "./sections/MainScreen";
import "./styles.css";
import Features from "./sections/Features";
import AboutUs from "./sections/AboutUs";
import Menu from "./sections/Menu";
import TakeAway from "./sections/TakeAway";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="App">
      <MainScreen />
      <Features />
      <AboutUs />
      <Menu />
      <TakeAway />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
