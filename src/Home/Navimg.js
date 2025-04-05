import React from "react";
import "./Navimg.css";
import img from "./images/img1.jpg";
import img1 from "./images/img3.jpg";
import img2 from "./images/img2.jpg";
import Newdrops from "../newdrops/Newdrops";

export default function Navimg() {
  return (
    <>
      <div className="heading">
        <h1>T SHOP</h1>
      </div>
      <div className="message">
        <p>There’s One for Everyone</p>
      </div>

      <div className="navimg">
        <div className="hovef1">
          <div className="image1">
            <img src={img} alt="" />{" "}
          </div>
          <div className="middle">
            <div className="text1">Shop Women</div>
          </div>
        </div>

        <div className="hovef2">
          <div className="image2">
            <img src={img2} alt="" />{" "}
          </div>
          <div className="middle">
            <div className="text2">Shop New</div>
          </div>
        </div>

        <div className="hovef3">
          <div className="image3">
            <img src={img1} alt="" />{" "}
          </div>
          <div className="middle">
            <div className="text3">Shop Men</div>
          </div>
        </div>
      </div>

      <div className="newdrops">
        <p>New Drops</p>
      </div>
      <Newdrops />
    </>
  );
}
