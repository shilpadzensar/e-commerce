import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; 

export default class Banner extends PureComponent {
    static propTypes = {
        banners: PropTypes.array
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
            <div>
            <OwlCarousel navText={this.navText} items={1} responsive={this.responsive} margin={0} autoplay={true} loop={true} nav={true} autoplayTimeout={4000} autoplayHoverPause={true} animateOut={'fadeOut'}> 
                {this.props.banners.map(banner => (
                    <div className={`banner banner-${banner.contentPosition}`}>
                      <img className="banner-image" src={banner.imageSrc} alt={banner.imageAltText} />
                      <div className="banner-content container">
                        <h1>{banner.title}</h1>
                        <p className="banner-description">{banner.description}</p>
                        <div><button className="btn btn-primary">{banner.buttonText}</button></div>
                      </div>
                    </div>
                ))}
            </OwlCarousel>
          </div>
        );
    }
}