import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-center">
      <div>
        <Link className="text-light" to="/">
          Home
        </Link>
       
      </div>
      <p className="text-light">created by ariba ahmed</p>
    </div>
  );
};

export default Footer;
