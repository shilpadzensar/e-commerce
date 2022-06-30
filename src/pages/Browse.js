import React, { PureComponent } from "react";
import HighlightBanner from "../components/HighlightBanner";
import CardSection from "../components/CardSection";
import homeData from "../assets/home.json"


export default class Browse extends PureComponent {
    render() {
        return (
            
                <div className="container mt-5 py-5">

                    <div className="row banner-grid">
                      <div className="col-12 col-lg-6 col-md-12 col-sm-12 pb-4">
                    <HighlightBanner bannerData={homeData.highlightBanner}></HighlightBanner>

                      </div>
                      <div className="col-12 col-lg-6 col-md-12 col-sm-12 pb-4">
                    <HighlightBanner bannerData={homeData.highlightBanner}></HighlightBanner>
                        
                      </div>
                    </div>

                    {homeData.sections.map((section, index) => (
                        <div>
                            <CardSection key={section.title} sectionData={section}></CardSection>
                            {(index < (homeData.sections.length - 1)) ?
                                <hr className="container" /> : ''}
                        </div>
                    ))}

                </div>

        );
    }
}
