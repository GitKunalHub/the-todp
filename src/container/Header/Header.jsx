import React from "react";

import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Making Memories</h1>
      <SubHeading title="One Pakwan at a Time" color={"var(--color-golden)"} />
      <p
        className="p__opensans"
        style={{ margin: "2rem 0", color: "var(--color-crimson)" }}
      >
        It's not just for fancy forks (though we have those too). Uncork an
        evening of culinary artistry, impeccable service, and an ambiance fit
        for royalty (minus the uncomfortable crown). Join us and unlock the
        delicious secrets of fine dining.
      </p>
      <button
        type="button"
        className="custom__button"
        onClick={() => {
          window.location.href = "https://the-todp.vercel.app/#menu";
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
