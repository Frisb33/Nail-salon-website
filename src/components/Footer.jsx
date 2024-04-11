import React from "react";
import { socialMedia } from "../constants";


const Footer = () => {
  return (
    <footer id="contact" className="bg-n-6 py-4  text-sm">
      <div className="container flex sm:justify-between pr-5 justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block px-10">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-n-3"
            >
              <item.iconUrl color="" size={20}/>
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
