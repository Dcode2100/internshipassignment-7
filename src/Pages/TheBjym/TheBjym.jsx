import React from 'react'
import Header from '../../components/Header/Header'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TheBjym.scss'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // autoplaySpeed: 3000,
  // cssEase: "ease-in-out",
};

const TheBjym = () => {

  return (
    <div>
      <div className="container">
        <Header />
        <div className="carousel">
          <Slider {...settings}>
            <div className="carousel-container">
              <img
                className="carousel-img"
                src="https://bjym.org/wp-content/uploads/2021/10/TS_Safron_Jacket.png"
              ></img>
            </div>
            <div className="carousel-container">
              <img
                className="carousel-img"
                src="https://bjym.org/wp-content/uploads/2021/08/DSC_1580-0.png"
              ></img>
            </div>
            <div className="carousel-container">
              <img
                className="carousel-img"
                src="https://bjym.org/wp-content/uploads/2021/08/Jagat-Prakash-Nadda.png"
              ></img>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TheBjym;