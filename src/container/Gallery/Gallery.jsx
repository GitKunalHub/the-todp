import React from "react";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07,
  images.gallery08,
  images.gallery09,
  images.gallery10,
  images.gallery11,
  images.gallery12,
  images.gallery13,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Food Photography So Good, It Should Be Illegal (But It's Not... Yet)
          Our photo gallery is a celebration of culinary artistry! Dive in for a
          close-up look at the vibrant colors, mouthwatering textures, and sheer
          deliciousness that awaits you. Consider this a fair warning - these
          photos might make your stomach rumble and your taste buds sing!
          Prepare to be seriously hungry (but don't worry, the real food is even
          more amazing).
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={() => {
            window.location.href =
              "https://www.instagram.com/thetodp_dalpakwan/";
          }}
        >
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram
                className="gallery__image-icon"
                onClick={() => {
                  window.location.href =
                    "https://www.instagram.com/thetodp_dalpakwan/";
                }}
              />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
