import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import OfferBanner from "./OfferBanner";
import HighlightBanner from "./HighlightBanner";

export default class CardSection extends PureComponent {
    static propTypes = {
        sectionData: PropTypes.object
    };
                navText =  [
                    '<i class="prev-btn fas fa-chevron-left"></i>',
                    '<i class="next-btn fas fa-chevron-right"></i>'
                ];
                responsiveSmall ={
                    0: {
                        items: 1,
                        nav: false
                    },
                    576: {
                        items: 1,
                        nav: false
                    },
                    768: {
                        items: 2,
                        nav: true
                    },
                    992: {
                        items: 2,
                        nav: true
                    }
                };
                responsiveLarge = {
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
                    },
                    992: {
                        items: 1,
                        nav: true
                    }
                };
    renderBanners (banner) {
        // if (this.props.sectionData && this.props.sectionData.cardType === 'offer' ) {
            return <HighlightBanner bannerData={banner}></HighlightBanner>;
        // }
    };

    render() {
        const gridClass = this.props.sectionData.bannerSize === 'small'? 'col-6 col-lg-2 col-md-3 col-sm-4' : 'col-12 col-lg-3 col-md-3 col-sm-6'
        return (
            <section className="container py-4 py-lg-5">
                <div className="mb-4 mb-lg-5">
                  <div className="title-wrapper mb-2">
                    <h1 className="title">{this.props.sectionData.title}</h1>
                    { this.props.sectionData.buttonText ? <span><button className="btn btn-outline-primary">{this.props.sectionData.buttonText}</button></span> : ''}
                  </div>
                  { this.props.sectionData.description ? <p>{this.props.sectionData.description}</p> : ''}
              </div>
                <div className="card-carousel mb-5">
                    <OwlCarousel navText={this.navText} responsive={this.props.sectionData.cardSize === 'small'? this.responsiveSmall : this.responsiveLarge } margin={24} autoplay={true} loop={true} nav={true} autoplayTimeout={2000} autoplayHoverPause={true}> 
                        {this.props.sectionData.cards.map(card => (
                            <div className="pb-2">
                                {this.renderBanners(card)}
                            </div>
                    ))}
                    </OwlCarousel>
                </div>
            </section>
        );
    }
}