import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          We started as a catering service, specializing in the irresistible
          combination of crispy pakwan and soul-warming dal. Our guests couldn't
          get enough, and by popular demand, we opened our doors in 2019! We
          still hold the legacy of our beginnings close, and you can always find
          our legendary Dal Pakwan on the menu.
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={() => {
            window.location.href = "https://g.co/kgs/5MTNmsH";
          }}
        >
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Back in 2007, a seed was sown – a seed of sharing our love for the
          perfect Dal Pakwan. What began as a catering service, overflowing with
          rave reviews, blossomed into the restaurant you know and love today.
          We haven't forgotten our roots, and our signature dish remains a
          cornerstone of our menu. Come savor the taste of tradition, a legacy
          of flavor that began over a decade ago.
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={() => {
            window.location.href = "https://g.co/kgs/5MTNmsH";
          }}
        >
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
