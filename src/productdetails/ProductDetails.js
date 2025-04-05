import React from "react";
import "./ProductDetails.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cartslice";

const ProductDetails = ({ items, onBack }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <div className="cont">
      <div className="pdetails">
        <img src={items.img} alt="image" />
        <div className="description">
          <h4>{items.title}</h4>
          <p>{items.desc}</p>
          <div className="dbutton">
            <button
              className="mt-3 border-2 border-solid border-slate-500 rounded-md py-1 px-2 bg-slate-200 font-bold"
              onClick={onBack}
            >
              Back
            </button>
            <button
              className="mt-3 ml-6 border-2 border-solid border-slate-500 rounded-md py-1 px-1 bg-slate-200 font-bold"
              onClick={() => handleAddToCart(items)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
