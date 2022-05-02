import NextArrow from "../../components/atoms/NextArrow";
import PrevArrow from "../../components/atoms/PrevArrow";

export const mobileScreen = "(max-width:600px)";
export const itemSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipe: true,
  /*   nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />, */
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
