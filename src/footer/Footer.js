import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer1">
        <div className="tleft">
          <Link to={"/"}>
            <div className="tlefttext">
              <p className="head">T Shop</p>

              <p>info@Tshop.com</p>
              <br></br>
              <p>Tel.: 123-456-7890</p>
            </div>
          </Link>
        </div>
        <div className="tright">
          <div className="rfirst">
            <div className="fhead">Shop</div>
            <Link to={"/New"}>
              <div className="ftext">New</div>
            </Link>
            <Link to={"/Women"}>
              <div className="ftext">Women</div>
            </Link>
            <Link to={"/Men"}>
              <div className="ftext">Men</div>
            </Link>
          </div>
          <div className="rsecond">
            <div className="fhead">Our Store</div>
            <div className="ftext">About Us</div>
            <div className="ftext">Subscribe</div>
            <div className="ftext">FAQ</div>
          </div>
          <div className="rthird">
            <div className="fhead">Terms & Conditions</div>
            <div className="ftext">Store Policy</div>
            <div className="ftext">Shipping & Returns</div>
            <div className="ftext">Payment Methods </div>
          </div>
        </div>
      </div>

      <div className="footer2">
        <div className="bleft"></div>
        <div className="bright">
          <p> © 2035 by T Shop. Powered and managed by Yash Taliyan </p>
        </div>
      </div>
    </>
  );
}
