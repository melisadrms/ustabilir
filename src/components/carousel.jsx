import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselData } from "./carouselData";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="ml-40 mr-40">
      <Slider {...settings}>
        {CarouselData.map((item) => (
          <div className="bg-white shadow-lg shadow-slate:500/20 text-center h-44">
            <img
              src={item.image}
              alt={item.title}
              className="h-20 mt-5 mb-3 ml-10"
            />
            <h1 className="mb-5">{item.title}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
}
