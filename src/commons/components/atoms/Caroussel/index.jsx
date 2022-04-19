import React from "react";
import Slider from "react-slick";

const defaultSettings = {
  autoPlay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 3000,
};

function Caroussel({ children }) {
  return (
    <div>
      <Slider {...defaultSettings}>{children}</Slider>
    </div>
  );
}

export default Caroussel;
