import React, { useState } from "react";

import { data } from "../../constants";

import { SubHeading, MenuItem } from "../../components";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [activeTab, setActiveTab] = useState("the_todp_specials");
  const handleClick = (category) => {
    setActiveTab(category);
  };

  const renderMenu = (category) => {
    return data[category].map((item, index) => (
      <MenuItem
        key={item.title}
        price={item.price}
        title={item.title}
        tags={item.tags}
        className={activeTab === category ? "active" : ""}
      />
    ));
  };

  const categories = Object.keys(data); // Get all categories as an array

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Signature Sizzles</h1>
      </div>

      <div className="app__specialMenu-tabs">
        <ul className="app__specialMenu-tabs_list">
          {categories.map((category) => (
            <li
              key={category}
              className={`app__specialMenu-tabs_item ${
                activeTab === category ? "active" : ""
              }`}
              onClick={() => handleClick(category)}
              style={{ alignContent: "center" }}
            >
              {category.replace(/_/g, " ")}{" "}
              {/* Replace underscores with spaces in category names */}
            </li>
          ))}
        </ul>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_items">
          {renderMenu(activeTab)}
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
};

export default SpecialMenu;
