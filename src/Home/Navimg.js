import React from "react";
import "./Navimg.css";
import img from "./images/img1.jpg";
import img1 from "./images/img3.jpg";
import img2 from "./images/img2.jpg";
import Newdrops from "../newdrops/Newdrops";
import { Link } from "react-router-dom";

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
            <Link to={"/Women"}>
              {" "}
              <img src={img} alt="" />{" "}
            </Link>
          </div>
          <div className="middle">
            <div className="text1">Shop Women</div>
          </div>
        </div>

        <div className="hovef2">
          <div className="image2">
            <Link to={"/New"}>
              {" "}
              <img src={img2} alt="" />{" "}
            </Link>
          </div>
          <div className="middle">
            <div className="text2">Shop New</div>
          </div>
        </div>

        <div className="hovef3">
          <div className="image3">
            <Link to={"/Men"}>
              {" "}
              <img src={img1} alt="" />{" "}
            </Link>
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
