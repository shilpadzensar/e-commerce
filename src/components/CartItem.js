import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    static propTypes = {
        itemData: PropTypes.object
    };  


    render() {
        const { itemData } = this.props;
        return (
            <section>
                <div className="cart-item">
                    <div className="row gy-2">
                        <div className="col-12 col-sm-4 col-md-12 col-lg-4">
                            <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="PRODUCT" />
                        </div>
                        <div className="col-12 col-sm-8 col-md-12 col-lg-8 d-flex flex-column">
                            <div className="flex-grow-1 d-flex">
                                <div className="flex-grow-1">
                                    <div className="fs-5 fw-bold">{itemData.productName}</div>
                                    <span className="description">{itemData.offers}</span>
                                </div>
                                <div>
                                    <div className="fs-3">{itemData.price}</div>
                                </div>
                            </div>
                            <div className="d-inline-flex align-items-center mt-3">
                                <div className="d-inline-flex align-items-center flex-grow-1 me-3">
                                    <button className="btn btn-outline-primary" type="button"><i className="fas fa-minus"></i></button>
                                    <span className="p-3 fw-bold fs-5">{itemData.quantity}</span>
                                    <button className="btn btn-outline-primary" type="button"><i className="fas fa-plus"></i></button>
                                </div>
                                <a className="link me-4" href="#"><i className="far fa-heart"></i></a>
                                <a className="link" href="#"><i className="fas fa-trash"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </section>
        );
    }
}