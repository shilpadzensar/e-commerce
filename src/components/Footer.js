import React, { PureComponent } from "react";

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
              <div className="container py-4 mb-5 mb-sm-0">
                <div className="row gy-5 py-4 main-footer">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div className="mb-3"><img className="logo-img" src="https://media-s3-us-east-1.ceros.com/zensar/images/2021/08/09/f1fafe474782334a2ae56a7af13739a4/zensar-logo-wht-png.png" alt="LOGO" /></div>
                    <p>Since 2015</p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div className="mb-3">
                      <h5>Address</h5>
                    </div>
                    some address links<br />
                    City<br />
                    PIN XXXXXXX
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                    <div className="mb-3">
                      <h5>Quick Links</h5>
                    </div>
                    <ul className="quick-links">
                      <li><a href="#">Policies</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Customer Support</a></li>
                      <li><a href="#">Shipping Locations</a></li>
                      <li><a href="#">Sitemap</a></li>
                      <li><a href="#">FAQ</a></li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                    <div className="mb-3">
                      <h5>Find us on Social Media</h5>
                    </div>
                    <div className="social">
                      <ul>
                        <li className="social-icon">
                          <a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="social-icon">
                          <a href="#"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li className="social-icon">
                          <a href="#"><i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="my-3">
                      <h5>Contact Details</h5>
                    </div>
                    <div>Tel: XXX-XXXX-XXXX</div>
                    <div>e-Mail: support@shop.com</div>
                  </div>
                </div>
                <hr />
                <div className="d-flex gy-3 flex-wrap">
                  <div className="flex-grow-1 mb-3">Copyright &copy; 2022
                  </div>
                  <div className="payment-options">
                    <i className="far fa-credit-card"></i>
                    <i className="fab fa-cc-mastercard"></i>
                    <i className="fab fa-cc-paypal"></i>
                    <i className="fab fa-cc-apple-pay"></i>
                    <i className="fab fa-cc-amazon-pay"></i>
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-amex"></i>
                  </div>
                </div>
              </div>
            </footer>
        );
    }
}