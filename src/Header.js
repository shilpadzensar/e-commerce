import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
<header>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container"><button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <NavLink className="navbar-brand" to="/">
        <img className="logo-img" alt="LOGO" src="https://logos-world.net/wp-content/uploads/2021/08/Zensar-Emblem.png" />
      </NavLink >
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink  className="nav-link active" aria-current="page" to="/" >Home</NavLink >
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" aria-current="page" to="/browse" >Latest Deals</NavLink >
          </li>
          <li className="nav-item dropdown">
            <NavLink  className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
            </NavLink >
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink  className="dropdown-item" to="/home2" >Home 2</NavLink ></li>
              <li><NavLink  className="dropdown-item" to="/checkout" >Checkout</NavLink ></li>
              <li><NavLink  className="dropdown-item" to="/product" >Product Details</NavLink ></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink  className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </NavLink >
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink  className="dropdown-item" to="/">Action</NavLink ></li>
              <li><NavLink  className="dropdown-item" to="/">Another action</NavLink ></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><NavLink  className="dropdown-item" to="/">Something else here</NavLink ></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/article">About Us</NavLink >
          </li>
        </ul>
      </div>
      <div className="nav-icons">
        <ul>
          <li className="nav-icon">
            <NavLink to="/"  data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fas fa-search"></i>
            </NavLink >
          </li>
          <li className="nav-icon">
            <NavLink  to="/wishlist" ><i className="fas fa-heart"><span className="notification-dot"></span></i>
            </NavLink >
          </li>
          <li className="nav-icon">
            <NavLink  to="/cart" ><i className="fas fa-shopping-cart"><span className="notification-dot"></span></i>
              <span className="count-badge fw-bold">11</span>
            </NavLink >
          </li>
          <li className="nav-icon">
            <NavLink  to="/"><i className="fas fa-user-alt"></i>
            </NavLink >
          </li>
          <li className="nav-icon"><NavLink  to="/login" >Login</NavLink ></li>
        </ul>
      </div>
    </div>
    <div className="sub-nav collapse" id="collapseExample">
      <hr className="mt-0 mb-0 pt-0 pb-0 container"/>
      <div className="container py-2">
        <div className="row gy-2">
          <div className="col-12 col-md-6 d-flex">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="What are you searching for?" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-wrap align-items-center">
            <NavLink  className="link me-3" to="/">Men</NavLink >
            <NavLink  className="link me-3" to="/">Women</NavLink >
            <NavLink  className="link me-3" to="/">Kids</NavLink >
            <NavLink  className="link me-3" to="/">Accessories</NavLink >
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

    );
  }
}
