import React from "react";

import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        It's not just for fancy forks (though we have those too). Uncork an
        evening of culinary artistry, impeccable service, and an ambiance fit
        for royalty (minus the uncomfortable crown). Join us and unlock the
        delicious secrets of fine dining.
      </p>
      <button
        type="button"
        className="custom__button"
        onClick={() => {
          window.location.href = "https://i.ibb.co/TTcp3V0/download.png";
        }}
      >
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
