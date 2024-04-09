import React from "react";

const Nav = () => {
  return (
    <nav className ="bg-custom shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between text-black lg:py-5 px-4 lg:px-20">
        {/* Logo positioned at the leftmost side */}
        <div>
          <span className="text-3xl font-bold">LOGO</span>
        </div>
        {/* Centering the <ul> element using Flexbox */}
        <div className="flex items-center flex-1 justify-center">
          <ul className="flex gap-8">
            <li>About</li>
            <li>Products</li>
            <li>Address</li>
          </ul>
        </div>
        {/* Placeholder to maintain spacing at the rightmost side */}
        <div>
        <span className="text-3xl font-bold text-transparent">LOGO</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
