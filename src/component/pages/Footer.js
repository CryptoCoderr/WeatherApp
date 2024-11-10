import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-gray-500 py-5 mt-9">
        <div className="containerkws">
          <div className="flex justify-between items-center ">
            <div className="font-bold text-white">GoHighLevel</div>
            <div className="flex gap-4">
              <FaTelegramPlane className="social_icon" />
              <FaFacebookF className="social_icon" />
              <FaInstagram className="social_icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
