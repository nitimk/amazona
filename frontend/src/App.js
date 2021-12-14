import React from "react";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            <Link to="/Signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:productId" element={<CartScreen />}></Route>
            <Route
              path="/product/:productId"
              element={<ProductScreen />}
            ></Route>
            <Route path="/signin" element={<SigninScreen />}></Route>

            <Route path="/" element={<HomeScreen />} exact></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  );
}

export default App;
