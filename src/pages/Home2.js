import homeData from "../assets/home2.json";
import Banner from "../components/Banner";
import HighlightBanner from "../components/HighlightBanner";
import CardSection from "../components/CardSection";


const Home2 = () => {
  return <div>
    <Banner banners={homeData.banners}></Banner>

    <CardSection sectionData={homeData.featureSection}></CardSection>

    <HighlightBanner bannerData={homeData.highlightBanner}></HighlightBanner>

    {homeData.sections.map((section, index) => (
      <div key={`${section.title}-${index}`}>
        <CardSection sectionData={section}></CardSection>
        {(index < (homeData.sections.length - 1)) ?
          <hr className="container" /> : ''}
      </div>
    ))}
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

export default Home2;