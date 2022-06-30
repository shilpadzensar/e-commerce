import React, { PureComponent } from "react";
import Header from "./Header";
import Footer from "./components/Footer";
import filterEmoji from "./filterEmoji";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Home2 from "./pages/Home2";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Browse from "./pages/Browse";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home2" element={<Home2 />} />
            <Route path="article" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="product" element={<ProductDetails />} />
            <Route path="browse" element={<Browse />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}
