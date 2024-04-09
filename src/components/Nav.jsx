import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="flex justify-between z-50 text-black lg:py-5 px-4 lg:px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold ml-4 lg:ml-16">LOGO</span>
        </div>
        <div className="flex items-center lg:flex-1 justify-end font-normal">
          <ul className="flex gap-4 lg:gap-8 mr-4 lg:mr-16 text-sm lg:text-base">
            <li>About</li>
            <li>Products</li>
            <li>Address</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
