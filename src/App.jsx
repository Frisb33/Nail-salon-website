import Nav from "./components/Nav";
import React from "react";
import "./App.css"; 
import Banner from "./components/Banner"

function App() {
  return (
    <div className="fill-pink-500 flex flex-col items-center flex flex-col items-center">
      <Nav />
      <div class = "banner" >
        <Banner />
      </div>
    </div>
  );
}

export default App;
