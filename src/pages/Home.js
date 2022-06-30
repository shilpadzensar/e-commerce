import homeData from "../assets/home.json";
import Banner from "../components/Banner";
import HighlightBanner from "../components/HighlightBanner";
import CardSection from "../components/CardSection";


const Home = () => {
  return <div>
    <Banner banners={homeData.banners}></Banner>

    <CardSection sectionData={homeData.featureSection}></CardSection>

    <HighlightBanner bannerData={homeData.highlightBanner}></HighlightBanner>

    {homeData.sections.map((section, index) => (
      <div>
        <CardSection key={section.title} sectionData={section}></CardSection>
        {(index < (homeData.sections.length - 1)) ?
          <hr className="container" /> : ''}
      </div>
    ))}
    <div className="container">
    {homeData.bannerGrid ? 
    <div className="row banner-grid py-4 py-lg-5">
    {homeData.bannerGrid.map((banner, index) => (
                      <div className="col-12 col-lg-6 col-md-12 col-sm-12 pb-4">
                    <HighlightBanner bannerData={banner}></HighlightBanner>

                      </div>
                      ))}
                    </div> : ''}
                    </div>
    {homeData.newsletter ? 
    <section className="newsletter">
      <div className="container py-4 py-lg-5">
        <h2 className="text-light">{homeData.newsletter.title}</h2>
        <input type="text" name="" className="form-control" placeholder={homeData.newsletter.inputPlaceholder} />
        <button className="btn btn-primary">{homeData.newsletter.buttonText}</button>
      </div>
    </section> : '' }

    <CardSection sectionData={homeData.bottomSection}></CardSection>

  </div>;
};

export default Home;