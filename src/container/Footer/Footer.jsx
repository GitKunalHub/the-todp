import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Shop No. 35 Rajmahal Complex, Behind Surya Residency, nr. Dhiraj Sons,
          Vesu, Surat, Gujarat 395007
        </p>
        <p className="p__opensans">+91 8200544305</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">Making Memories, One Pakwan at a Time.</p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">07:30 Am - 09:00 Pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">09:30 Am - 10:30 Pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2024 The Taste Of Dal Pakwan. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
