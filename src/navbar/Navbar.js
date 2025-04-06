import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <>
      <div className="salebar">
        <p>
          <span className="flash-text">
            Sale is on! 25% off sitewide using TEES25 at checkout
          </span>
        </p>
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
        <Link to={"/Cart"} className="second bag">
          BAG
        </Link>
        <div className="circle">{totalQuantity}</div>
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
