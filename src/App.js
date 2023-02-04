import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Products from "./Products";
import SingleProduct from "./SingleProduct"

const App = () => {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>


      </Routes>
  </BrowserRouter>;
};

export default App;
