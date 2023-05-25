import React from "react";
const Footer = () => {
    let year = new Date().getFullYear();
  return (
    <>
    <footer className="bottom-0 w-full text-center absolute">
        Copyright @ {year}
    </footer>
    </>
  );
};

export default Footer;
