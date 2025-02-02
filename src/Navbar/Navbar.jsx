import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <span className="logo"></span>
          <div className="exten-logo">Flights</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
