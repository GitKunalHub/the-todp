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
        <p className="p__opensanss" style={{ color: "var(--color-crimson)" }}>
          Shop No. 35 Rajmahal Complex, Behind Surya Residency, nr. Dhiraj Sons,
          Vesu, Surat, Gujarat 395007
        </p>
        <br />
        <p className="p__opensanss" style={{ color: "var(--color-crimson)" }}>
          +91 8200544305
        </p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p
          className="p__cormorant"
          style={{ color: "var(--color-golden)", fontSize: "13pt" }}
        >
          Making Memories, One Pakwan at a Time.
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook
            onClick={() => {
              window.location.href = "https://www.facebook.com/thetodp/";
            }}
            style={{ color: "var(--color-crimson)" }}
          />
          <FiTwitter
            onClick={() => {
              window.location.href = "https://twitter.com/thetodp";
            }}
            style={{ color: "var(--color-crimson)" }}
          />
          <FiInstagram
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/thetodp_dalpakwan/";
            }}
            style={{ color: "var(--color-crimson)" }}
          />
        </div>
      </div>
      {/* <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensanss">Monday-Sunday:</p>
        <p className="p__opensanss">07:30 Am - 09:00 Pm</p>
      </div> */}
    </div>
    <div className="footer__copyright">
      <p className="p__opensans" style={{ color: "var(--color-crimson)" }}>
        2024 The Taste Of Dal Pakwan. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
