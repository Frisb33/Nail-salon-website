// Banner.jsx
import React from "react";
import pic from "/banner1.png"

function Banner() {
  return (
      <div id="top" className="relative justify-center items-center " >
        <div className="relative  mx-auto md:max-w-6xl">
          <div className="relative z-1 p-0.5 rounded-2xl bg-n-3">

              <div className=" rounded-t-[0.9rem] rounded-b-[0.9rem] overflow-hidden ">
                <img
                  src={pic}
                  alt="Banner Image"
                />
              </div>
          </div> 
        </div>
       
      </div>
      
  );
}

export default Banner;
