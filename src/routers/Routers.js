

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import ProductDeatils from "../pages/ProductDeatils";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='home' />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ProductDeatils />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
    </Routes>
  )
}

export default Routers