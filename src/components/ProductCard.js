import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ProductCard extends PureComponent {
    static propTypes = {
        cardData: PropTypes.object,
        cardShape: PropTypes.string
    };

    render() {
        return (

          <div className={`product-card d-flex flex-column ${this.props.cardShape}`}>
        <div className="card-image">
          <img src={this.props.cardData.images[0].imageSrc} alt={this.props.cardData.images[0].imageAltText} />
          <span className="highlight-badge py-1 px-3">{this.props.cardData.badge}</span>
          <div className="product-ratings d-flex py-1 px-3">
            <div className="product-rating flex-grow-1">
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star"></i></span>
              <span><i className="fas fa-star-half-alt"></i></span>
            </div>
            <div>{this.props.cardData.totalRatings} Ratings</div>
          </div>
        </div>
        <div className="product-details flex-grow-1 p-3 d-flex flex-column">
          <div className="d-flex flex-grow-1">
            <div className="flex-grow-1">
              <div className="fs-6 fw-bold">{this.props.cardData.productName}</div>
              <span className="description">{this.props.cardData.caption}</span>
            </div>
            <div>
                <div className="fs-5">{this.props.cardData.discountPrice}</div>
                <div className="fade-price text-decoration-line-through m-0">{this.props.cardData.price}</div>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <a className="link flex-grow-1" href="#"><i className="fas fa-shopping-cart me-2"></i>Add to Cart</a>
            <a className="link" href="#"><i className="far fa-heart"></i></a>
          </div>
        </div>
      </div>
        );
    }
}