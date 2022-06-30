import React, { PureComponent } from "react";
import PropTypes from "prop-types";
export default class PlainCard extends PureComponent {
    static propTypes = {
        cardData: PropTypes.object,
        cardShape: PropTypes.string
    };

    render() {
        return (

          <div className={`highlight-card ${this.props.cardShape}`}>
            <div className="card-image mb-3">
              <img src={this.props.cardData.imageSrc} alt={this.props.cardData.imageAltText} />
              {
                this.props.cardData.buttonText ?
              
              <div className="card-content px-4 py-4 d-flex align-items-center justify-content-center flex-wrap"><button className="btn btn-outline-primary">{this.props.cardData.buttonText}</button></div> : ''
            }
            </div>
            {
                this.props.cardData.title ? 
                <div className="fs-5 fw-bold">{this.props.cardData.title}</div>
                : ''
            }
            {
                this.props.cardData.description ? 
            <p className="fade-text">{this.props.cardData.description}</p>
            : ''
            }
          </div>
        );
    }
}