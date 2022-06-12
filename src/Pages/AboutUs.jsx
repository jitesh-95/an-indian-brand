import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="stories">
        <div className="storiesdesc">
          <h1>AN INDIAN BRAND powers millions of businesses worldwide</h1>
          <p>
            The all-in-one commerce platform to start, run, and grow a business.
          </p>
        </div>
        <img src="../.././assets/about1.webp" alt="" />
      </div>
      <div className="stories">
        <img src="../.././assets/about2.webp" alt="" />
        <div className="storiesdesc">
          <h1>The first AN INDIAN BRAND store was our own</h1>
          <p>
            Over a decade ago, we started a store to sell snowboards online.
            None of the ecommerce solutions at the time gave us the control we
            needed to be successful—so we built our own. Today, businesses of
            all sizes use AN INDIAN BRAND, whether they’re selling online, in
            retail stores, or on-the-go.
          </p>
        </div>
      </div>
      <div className="aboutmission">
        <h3>OUR MISSION</h3>
        <h1>Making commerce better for everyone</h1>
        <p>
          We help people achieve independence by making it easier to start, run,
          and grow a business. We believe the future of commerce has more
          voices, not fewer, so we’re reducing the barriers to business
          ownership to make commerce better for everyone.
        </p>
      </div>
      <div className="stories">
        <div className="storiesdesc laststory">
          <h1>We’re building a 100-year company</h1>
          <p>
            AN INDIAN BRAND builds for the long term, and that means investing
            in our planet, our communities, and our people. Our Sustainability
            Fund and Social Impact initiatives include choosing renewable
            energy, reducing and offsetting our carbon emissions, and enabling
            an equitable and sustainable future by building products and
            programs to support our team and merchants.
          </p>
        </div>
        <img src="../.././assets/about3.webp" alt="" />
      </div>
      <div className="explore">
        <Link to="/">Explore The Website Now</Link>
      </div>
    </div>
  );
};

export default AboutUs;
