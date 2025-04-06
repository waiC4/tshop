import React, { useState } from "react";
import newc from "./Data2.json";
import "./Newcard.css";
import ProductDetails from "../productdetails/ProductDetails";

export default function Newcard() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleReadMore = (item) => {
    setSelectedProduct(item);
  };
  const handleBack = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      {selectedProduct ? (
        <ProductDetails items={selectedProduct} onBack={handleBack} />
      ) : (
        <div className="cardcont">
          {newc.map((item) => (
            <div className="nacard">
              <img src={item.img} alt="img" />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <button
                className="mt-3 border-2 border-solid border-slate-500 rounded-md py-1 px-2 bg-slate-200 font-bold"
                onClick={() => handleReadMore(item)}
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
