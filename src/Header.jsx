import React from "react";
import logo from "./image/images.jpeg"
const Header = () => {
  return (
    <>
      <div className="bg-yellow-400 max-h-[13%] flex shadow-lg shadow-slate-500/50">
      <img src={logo} className="h-12  m-5 inline-block" alt="logo"/>
        <h1 className="inline-block text-4xl mt-5 mb-6 ml-5 pt-2 fontheader"> Notes </h1>
      </div>
    </>
  );
};

export default Header;
