import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <div id="home" className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Banner />
        {/* this is about us section */}
        <div id="aboutus" className="text-center max-w-3xl mx-auto px-4 mt-10 mb-10"> 
          <h2 className="text-2xl font-bold mb-4 font-code">About Us</h2>
          <p className="italic text-sm md:text-base leading-relaxed font-sora">
            ''Welcome to [Nail Salon Name], your destination for nail care and beauty!
            <br />
            <br />
            At [Nail Salon Name], we believe that your hands and feet deserve the utmost care and attention. Our salon is a haven of tranquility where you can escape the hustle and bustle of everyday life and indulge in a pampering experience that leaves you feeling rejuvenated and glamorous.
            <br />
            <br />
            Our team of skilled nail technicians is dedicated to providing you with top-quality nail services, using only the finest products and techniques to ensure stunning results every time. Whether you're looking for a classic manicure, a trendy nail art design, or a luxurious spa pedicure, we have you covered.
            <br />
            <br />
            Step into our modern and inviting salon space, where cleanliness and hygiene are our top priorities. Sit back, relax, and let our friendly staff take care of you as you unwind in our comfortable chairs and enjoy a complimentary beverage.''
            <br />
            <br />
          </p>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default App;
