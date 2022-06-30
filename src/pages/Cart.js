import CardSection from "../components/CardSection";
import cartData from "../assets/cart.json";
import CartItem from "../components/CartItem";
import AddCoupon from "../components/AddCoupon";
import Summary from "../components/Summary";
import OfferBanner from "../components/OfferBanner";

const Cart = () => {
  return (
    <div className="mt-5">
      <OfferBanner offerBanner={cartData.offerBanner} />

      <section className="container py-4 py-lg-5">
        <a className="link"><i className="fas fa-angle-left me-3 mb-4 mb-lg-5"></i>Keep Shopping</a>
        <h1 className="mb-4 mb-lg-5">{cartData.cartSection.title}</h1>
        <div className="row gy-4 gx-5">
          <div className="col-12 col-md-6 col-lg-8">
            {cartData.cartSection.items.map(cart => <CartItem itemData={cart} />)}
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <AddCoupon />
            <hr />
            <Summary summaryData={cartData.summaryData} />
            <div className="d-grid gap-2">
            <button className="btn btn-primary full-width mt-4">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </section>
      <hr className="container" />

      {cartData.sections.map((section) => <CardSection sectionData={section}></CardSection>)}
    </div>

  );
};

export default Cart;