import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialGoogle } from "react-icons/sl";

const Footer = () => {
  return (
    <footer id="contact" className="bg-n-6 text-white py-4 text-black text-sm">
      <div className="container mx-auto flex justify-between">
        <div>
          <p className="ml-5">&copy; 2024 [Your Nail Salon Name]. All rights reserved.</p>
          <p className="ml-5">Designed and developed by [Your Name].</p>
        </div>
        <div className="flex text-white mr-14 cursor-pointer text-4xl flex-row gap-8">
          <SlSocialInstagram/>
          <TiSocialFacebook/>
          <SlSocialGoogle/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
