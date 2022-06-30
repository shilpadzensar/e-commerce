import React, { PureComponent } from "react";
import PropTypes from "prop-types";


export default class OfferBanner extends PureComponent {
    static propTypes = {
        offerBanner: PropTypes.object
    };

    render() {
        return (
            <section className="highlight-banner banner-center py-4">
                <div className="container">
                    <div className="d-inline-flex flex-wrap align-items-center">
                        <h2 className="me-3 my-2">{this.props.offerBanner.text}</h2>
                        <button className="btn btn-primary">{this.props.offerBanner.buttonText}</button>
                    </div>
                </div>
            </section>
        );
    }
}