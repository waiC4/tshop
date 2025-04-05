import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "./Cartslice";
const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="rounded-t-lg w-1-2 ml-[25%] mr-[25%] border-2 border-gray-500 mt-12 ">
      <h1 className="text-center mt-8 mb-8 text-2xl font-bold text-blue-800">
        Shopping Cart
      </h1>
      <button
        className=" mr-2 float-right font-bold bg-red-400 p-2 rounded-md text-xl"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      <h2 className="ml-2 font-bold">Total Items: {totalQuantity}</h2>
      <h2 className="ml-2 font-bold">Total Price: Rs. {totalPrice}</h2>
      <div>
        <h2 className="underline mb-8 text-center font-bold text-2xl text-red-950">
          Cart Items
        </h2>
        {items.length === 0 ? (
          <p className="mb-5 ml-2 text-2xl font-bold text-red-700">
            Your cart is empty.
          </p>
        ) : (
          items.map((item) => (
            <div
              className=" ml-2 mb-2 mr-2 mt-2 flex justify-between border-2 border-gray-600 rounded-lg"
              key={item.id}
            >
              <img src={item.img} alt={item.Title} style={{ width: "100px" }} />
              <div className=" flex flex-col ml-8 font-bold">
                <h3>Book Title : {item.Title}</h3>
                <p>Price: Rs. {item.Price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {item.totalPrice}</p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className=" ml-12 text-2xl bg-gray-400 rounded-xl p-2 "
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
                <button
                  className="ml-12 text-2xl bg-gray-400 rounded-xl p-2 "
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
              </div>
              <div className="ml-24 mt-7">
                <button
                  className="p-2 bg-red-700 rounded-lg font-bold mr-2"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-center bg-gray-700 pt-4 pb-4 text-white font-bold text-xl cursor-pointer">
        BUY NOW
      </div>
    </div>
  );
};
export default Cart;
