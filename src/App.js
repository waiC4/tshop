import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Navimg from "./Home/Navimg";
import Men from "./men/Men";
import Women from "./women/Women";
import New from "./new/New";
import Footer from "./footer/Footer";
import { Provider } from "react-redux";
import Store from "./features/Store";
import Cart from "./features/Cart";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navimg />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/New" element={<New />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
