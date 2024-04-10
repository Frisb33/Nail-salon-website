import Nav from "./components/Nav";
import React from "react";
import "./App.css"; 
import Banner from "./components/Banner"
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Banner />

      </div>
    </>
  );
};

export default App;
