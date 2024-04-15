import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" color={"var(--color-golden)"} />
      <h1 className="headtext__cormorantt" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ color: "var(--color-crimson)" }}>
          Shop No. 35 Rajmahal Complex, Behind Surya Residency, nr. Dhiraj Sons,
          Vesu, Surat, Gujarat 395007
          <br />
          <br />
        </p>
        <p className="p__opensanss" style={{ color: "var(--color-crimson)" }}>
          +91 8200544305
        </p>
        <p
          className="p__cormorant"
          style={{
            color: "var(--color-golden)",
            margin: "4rem 0",
            fontSize: "25pt",
          }}
        >
          Opening Hours
        </p>
        <p className="p__opensans" style={{ color: "var(--color-crimson)" }}>
          Mon - Sun: 07:30 am - 09:00 pm
        </p>

        {/* <p className="p__opensans" style={{ color: "var(--color-crimson)" }}>
          Sat - Sun: 09:30 am - 10:30 pm
        </p> */}
      </div>
      <button
        className="custom__button"
        style={{ marginTop: "2rem" }}
        onClick={() => {
          window.location.href = "https://maps.app.goo.gl/KKa9Kukspf5pZcwa6";
        }}
      >
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
