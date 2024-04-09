import Nav from "./components/Nav";
import React from "react";
import bannerImage from './assets/nail salon banner demo.jpg';



function App() {

  return (
    <div className = " bg-peach-900">
      <Nav/>
      <img src = "[bannerImage]" alt = "banner"></img>
    </div>
  )
}

export default App;
