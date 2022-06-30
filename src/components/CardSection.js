import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import PlainCard from "../components/PlainCard";
import ProductCard from "../components/ProductCard";

export default class CardSection extends PureComponent {
    static propTypes = {
        sectionData: PropTypes.object
    };
                navText =  [
                    '<i class="prev-btn fas fa-chevron-left"></i>',
                    '<i class="next-btn fas fa-chevron-right"></i>'
                ];
                responsiveMedium ={
                    0: {
                        items: 1,
                        nav: false
                    },
                    576: {
                        items: 2,
                        nav: false
                    },
                    768: {
                        items: 3,
                        nav: true
                    },
                    992: {
                        items: 4,
                        nav: true
                    }
                };
                responsiveSmall = {
                    0: {
                        items: 2,
                        nav: false
                    },
                    576: {
                        items: 3,
                        nav: false
                    },
                    768: {
                        items: 4,
                        nav: true
                    },
                    992: {
                        items: 6,
                        nav: true
                    }
                };
    renderCards (card) {
        if (this.props.sectionData && this.props.sectionData.cardType === 'product' ) {
            return <ProductCard key={card.productId} cardData={card} cardShape={this.props.sectionData.cardShape}> </ProductCard>;
        }
        return <PlainCard key={card.title} cardData={card} cardShape={this.props.sectionData.cardShape}> </PlainCard>
    };

    render() {
        const gridClass = this.props.sectionData.cardSize === 'small'? 'col-6 col-lg-2 col-md-3 col-sm-4' : 'col-12 col-lg-3 col-md-3 col-sm-6'
        return (
            <section className="container py-4 py-lg-5">
                <div className="mb-4 mb-lg-5">
                  <div className="title-wrapper mb-2">
                    <h1 className="title">{this.props.sectionData.title}</h1>
                    { this.props.sectionData.buttonText ? <span><button className="btn btn-outline-primary">{this.props.sectionData.buttonText}</button></span> : ''}
                  </div>
                  <p>{this.props.sectionData.description}</p>
              </div>
              {
                this.props.sectionData.sectionType === 'carousel' ?
                    <div className="card-carousel mb-5">
                    <OwlCarousel navText={this.navText} responsive={this.props.sectionData.cardSize === 'small'? this.responsiveSmall : this.responsiveMedium } margin={24} autoplay={true} loop={true} nav={true} autoplayTimeout={2000} autoplayHoverPause={true}> 
                        {this.props.sectionData.cards.map(card => (
                            <div className="pb-2">
                                {this.renderCards(card)}
                            </div>
                    ))}
                    </OwlCarousel>
                    </div>
                : 
                    <div className="row gy-4">
                    {this.props.sectionData.cards.map(card => (
                      <div className={gridClass}>
                        {this.renderCards(card)}
                      </div>
                    ))}
                    </div>
                }
            </section>
        );
    }
}