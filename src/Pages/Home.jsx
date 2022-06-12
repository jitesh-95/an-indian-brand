import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Faq from "../components/Faq";
// import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const mensPage = () => {
    navigate("/mens");
  };
  const womensPage = () => {
    navigate("/womens");
  };

  const shopPage = () => {
    navigate("/shop");
  };

  return (
    <div>
      <p className="free">
        <span className="flash">FREE </span> Shipping on Order Above Rs.399{" "}
        <ArrowForwardIcon /> Use CODE{"  "}
        <span className="flash">SHOP25</span>
      </p>
      <div className="banner">
        <img src="banner.jpg" alt="banner" />

        <div className="saleDiv">
          <h1 className="headline">Shop Anywhere</h1>
          <hr />
          <h4 className="anyone">Shop For Anyone</h4>
          <h1 className="off">25% OFF</h1>

          <h2 className="sale">
            48 HOURS <span className="flash">FLASH</span> SALE
          </h2>
          <button className="save" onClick={shopPage}>
            SAVE NOW <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <div className="Description">
        <h1>We Sell Products Worth Holding Onto</h1>
        <p>
          The products we use on a daily basis say something about the people we
          are. We believe many things in life get better with time; it is that
          spirit we try to infuse in everything we create. In a world where we
          are overwhelmed by products made to break down or go out style, we aim
          to go against that grain.
        </p>
      </div>
      <div className="categories">
        <div className="mens">
          <img src="mens.jpg" alt="mens" />
          <button className="viewAll" onClick={mensPage}>
            View All
          </button>
        </div>
        <div className="womens">
          <img src="womens.jpg" alt="womens" />
          <button className="viewAll" onClick={womensPage}>
            View All
          </button>
        </div>
      </div>
      {/* faq */}
      <Faq />
    </div>
  );
};

export default Home;
