import React from "react";
// import components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
// import Brands from "./components/Brands";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import { HashRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default App;
