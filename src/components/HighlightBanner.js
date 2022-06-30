import React, { PureComponent } from "react";
import PropTypes from "prop-types";
export default class HighlightBanner extends PureComponent {
    static propTypes = {
        bannerData: PropTypes.object
    };

    render() {
        return (
        <section className={`highlight-banner banner-${this.props.bannerData.contentPosition} py-5`}>
          <div className="container">
            {
                this.props.bannerData.title ?
                <h1 className="mb-3">{this.props.bannerData.title}</h1> : ''
            }
            {
                this.props.bannerData.description ?
                <p className="mb-4">{this.props.bannerData.description}</p> : ''
            }
            {
                this.props.bannerData.buttonText ? <button className="btn btn-primary">{this.props.bannerData.buttonText}</button> : ''
            }
          </div>
        </section>
        );
    }
}