import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Carousel from "./components/Carousel";

const App = () => {
  
  return (
    <>
      <div id="home" className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Banner />
        <AboutUs />
        <Service />
        <Carousel/>
        <Contact />
        <Footer/>
       
      </div>
    </>
  );
};

export default App;
