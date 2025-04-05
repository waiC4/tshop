import React,{useState} from "react";
import newc from "./Data2.json";
import './Newcard.css'
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
    {
      selectedProduct ? (
        <ProductDetails items={selectedProduct} onBack={handleBack} />
      ) : (
      <div className="cardcont">
        {newc.map((item) => (
          <div className="nacard">
            <img src={item.img} alt="img" />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <button onClick={()=>handleReadMore(item)}>Read more</button>
          </div>
        ))}
      </div>
)}
    </>
  );
}
