import React,{useState} from "react";
import "./Mcard.css";
import mdata from "./Data.json";
import ProductDetails from "../productdetails/ProductDetails";
const Mcard =()=> {
  const[selectedProduct,setSelectedProduct]=useState(null);
  const handleReadMore=(item)=>{
    setSelectedProduct(item);
  };
  const handleBack=()=>{
    setSelectedProduct(null);
  };
  return (
  <>
    {
      selectedProduct?(
        <ProductDetails items={selectedProduct} onBack={handleBack}/>
      ):(
    <div className="cardcont">
      {mdata.map((item,index) => (
        <div key={index} className="mcard">
          <img src={item.img} alt="" />
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
          <button onClick={()=>handleReadMore(item)}>Read More</button>
        </div>
      ))}
    </div>
      )}
    </>
  );
}
export default Mcard;
