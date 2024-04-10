import React from "react";

import { images, data } from "../../constants";

import { SubHeading, MenuItem } from "../../components";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">The TODP's Signature</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title}
              price={wine.price}
              title={wine.title}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Breakfast and Beverages</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title}
              price={cocktail.price}
              title={cocktail.title}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button
        type="button"
        className="custom__button"
        onClick={() => {
          window.location.href = "https://i.ibb.co/TTcp3V0/download.png";
        }}
      >
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
