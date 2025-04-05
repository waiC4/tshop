import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="salebar">
        <p>Sale is on! 25% off sitewide using TEES25 at checkout</p>
      </div>
      <div className="navbar">
        <Link to={"/"} className="first">
          T SHOP
        </Link>
        <Link to={"/New"} className="second sec">
          NEW
        </Link>
        <Link to={"/Women"} className="second">
          WOMEN
        </Link>
        <Link to={"/Men"} className="second">
          MEN
        </Link>
        <Link to={"/Cart"} className="second">
          CART
        </Link>
        {/* <div className="third">BAG</div> */}
      </div>
      {/* <div className="heading">
        <h1>T SHOP</h1>
      </div>
      <div className="message">
        <p>There’s One for Everyone</p>
      </div> */}
    </>
  );
}
