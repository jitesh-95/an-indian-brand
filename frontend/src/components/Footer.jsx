import { Icon } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="insidefooter">
          <h2>Stay Conneted</h2>
          <p>Get updates right after launcing.</p>
          <input type="email" placeholder="Enter Email..." />
          <button>Sign me up</button>
          <div className="icons">
            <Icon as={FaYoutube} w={6} h={6} />
            <Icon as={FaInstagram} w={6} h={6} />
            <Icon as={FaLinkedin} w={6} h={6} />
            <Icon as={FaTwitter} w={6} h={6} />
          </div>
        </div>
        <div className="insidefooter">
          <h2>Privacy Policy</h2>
          <p>
            We know that you care how information about you is used and shared,
            and we appreciate your trust that we will do so carefully and
            sensibly.That's why we don't share personal information with anyone.
          </p>
        </div>
        <div className="insidefooter">
          <h2>Our Mission</h2>
          <p>
            Our vision is to be Earth’s most customer-centric company; to build
            a place where people can come to find and discover anything they
            might want to buy online.
          </p>
        </div>
      </div>
      <div className="bottom">
        <p>@ 2022 All Media Solutions</p>
        <p>Privacy Policy</p>
        <p>Sitemap</p>
        <p>Careers</p>
        <Link to="/contactus">Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer;
