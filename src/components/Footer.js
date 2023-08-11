import React, { useState, useEffect } from "react";

// Impport social data
import { social } from "../data";

// import Logo
import Logo from "../assets/img/foto-baru/ferry.png";
const Footer = () => {
  return (
    <footer className="bg-tertiary py-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* sosial icons */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" target="_blank" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* logo */}
          <div>
            <img src={Logo} className="w-[50px] h-[50px]" />
          </div>
          {/* copyright */}
          <p> &copy; &#450; Ferryawan Ardiansyah All Right Reserved. </p>
        </div>{" "}
      </div>
    </footer>
  );
};
export default Footer;
