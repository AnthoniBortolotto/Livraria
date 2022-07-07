import React, { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";

const defaultSettings = {
  autoPlay: true,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 2000,
};

function Caroussel({ children, settings = defaultSettings, autoPlay = false }) {
  const sliderRef = useRef(null);
  useEffect(() => {
    if (autoPlay) {
      sliderRef.current.slickPlay();
    }
  }, []);

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default Caroussel;
