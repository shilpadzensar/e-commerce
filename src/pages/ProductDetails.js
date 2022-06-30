import ProductCard from "../components/ProductCard";
import CardSection from "../components/CardSection";
import Reviews from "../components/Reviews";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import products from "../assets/similar-card-section.json";
import OwlCarousel from 'react-owl-carousel';


export default class ProductDetails extends PureComponent {
    static propTypes = {
        cardData: PropTypes.object,
        cardShape: PropTypes.string
    };
    navText =  [
                    '<i class="prev-btn fas fa-chevron-left"></i>',
                    '<i class="next-btn fas fa-chevron-right"></i>'
                ];
    responsive = {
                    0: {
                        items: 1,
                        nav: false
                    },
                    576: {
                        items: 1,
                        nav: false
                    },
                    768: {
                        items: 1,
                        nav: true
                    }
                };
    render() {
        return (
            <div className="mt-5">
                <section className="container py-4 py-lg-5">
                    <a className="link"><i className="fas fa-angle-left me-3 mb-4 mb-lg-5"></i>Back to previous page</a>
                    <div className="row gy-4 gx-5">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="highlight-card">
                                <div className="card-image mb-3">
                                    <img src="https://images.unsplash.com/photo-1619900746827-1484e5f136ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                </div>
                            </div>
                            <div className="thumbnail-carousel mb-3 px-4">
                                <OwlCarousel navText={this.navText} items={4} margin={10} loop={true} nav={true}>
                                    <div className="">
                                        <div className="highlight-card">
                                            <div className="card-image mb-3">
                                                <img src="https://images.unsplash.com/photo-1619900746827-1484e5f136ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="highlight-card">
                                            <div className="card-image mb-3">
                                                <img src="https://images.unsplash.com/photo-1619900746827-1484e5f136ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="highlight-card">
                                            <div className="card-image mb-3">
                                                <img src="https://images.unsplash.com/photo-1619900746827-1484e5f136ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="highlight-card">
                                            <div className="card-image mb-3">
                                                <img src="https://images.unsplash.com/photo-1619900746827-1484e5f136ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="highlight-card">
                                            <div className="card-image mb-3">
                                                <img src="https://images.unsplash.com/photo-1619900746827-1484e5f136ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <h1 className="mb-4">Aloe Barbadensis</h1>
                            <div className="lead">Indoor Plants</div>
                            <div className="d-flex my-4">
                                <div className="text-primary me-3">
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star"></i></span>
                                    <span><i className="fas fa-star-half-alt"></i></span>
                                </div>
                                <div>685 Ratings</div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.</p>
                            <span className="badge bg-info text-dark fs-5 mb-4">Offer</span>
                            <div className="fade-price text-decoration-line-through fs-5 mb-1">$150</div>
                            <div className="fs-3 fw-bold mb-5">$100</div>
                            <button className="btn btn-primary me-4"><i className="fas fa-shopping-cart me-2"></i>Add to Cart</button>
                            <a className="link"><i className="far fa-heart"></i></a>
                            
                        </div>
                        <div className="col-12">
                            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Reviews</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    <br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                </div>
                            </div>
                        </div>
                </section>
                <hr className="container"/>
                    <CardSection sectionData={products}></CardSection>
            </div>
        );
    }
}