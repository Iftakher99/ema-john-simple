import React from "react";
import logo from "../../images/logo.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/Shop">Shop</a>
        <a href="/Order Review">Order Review</a>
        <a href="/Manage Inventory">Manage Inventory</a>{" "}
      </nav>
    </div>
  );
};

export default Header;
