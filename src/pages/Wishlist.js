import CardSection from "../components/CardSection";
import wishlistData from "../assets/wishlist.json";
import OfferBanner from "../components/OfferBanner";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
    const gridClass = 'col-6 col-lg-4 col-md-3 col-sm-4';
    return (
        <div className="mt-5">
            <OfferBanner offerBanner={wishlistData.offerBanner} />
            <section className="container">
                <a className="link" href="#"><i className="fas fa-angle-left me-3 my-4 my-lg-5"></i>Back to previous page</a>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 pb-4 pb-lg-5">
                        <div className="fs-5 mb-3 fw-bold">Filter By Categories</div>
                        <ul className="list-group">
                            <li className="list-group-item">For Him</li>
                            <li className="list-group-item">For Her</li>
                            <li className="list-group-item">For Kids</li>
                            <li className="list-group-item">Home Appliances</li>
                            <li className="list-group-item">Accesories</li>
                        </ul>
                        <div className="fs-5 mt-4 mb-3 fw-bold">More Filters</div>
                        <div className="accordion" id="accordionFlushExample ">
                            <div className="accordion-item">
                                <div className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Price Range
                                    </button>
                                </div>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Color
                                    </button>
                                </div>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being
                                        filled with some actual content.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Brands
                                    </button>
                                </div>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                        <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                                        happening here in terms of content, but just filling up the space to make it look, at least at first
                                        glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 pb-4 pb-lg-5">
                        <h1 className="mb-4 mb-lg-5">{wishlistData.wishlistItems.title}</h1>
                        <div className="mb-4 mb-lg-5">
                            <span className="fw-bold me-4">Filters Applied:</span>
                            <span className="badge bg-info text-black me-3">$20 - $1200</span>
                            <span className="badge bg-info text-black me-3">HomeBrand</span>
                            <span className="badge bg-info text-black me-3">Accessories</span>
                            <span className="badge bg-info text-black me-3">Kids</span>
                        </div>
                        <div className="row gy-4">
                            {wishlistData.wishlistItems.items.map((card, index) => (
                                <div key={`${card.productId}-${index}`} className={gridClass}>
                                    <ProductCard cardData={card} cardShape={"square"}> </ProductCard>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr />
            </section>
            <CardSection sectionData={wishlistData.wishlistProduct}></CardSection>
        </div>
    );
};

export default Wishlist;