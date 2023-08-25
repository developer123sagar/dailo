import "../assets/css/bootstrap.min.css";
import "../assets/css/flex-slider.css";
import "../assets/css/font-awesome.css";
import "../assets/css/lightbox.css";
import "../assets/css/owl-carousel.css";
import "../assets/css/templatemo-klassy-cafe.css";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slideImages = [
    "https://media.discordapp.net/attachments/1043905461193285702/1115165231392509983/slide-04.png?width=876&height=467",
    "https://media.discordapp.net/attachments/1043905461193285702/1115165232038420520/slide-03.png?width=876&height=467",
    "https://media.discordapp.net/attachments/1043905461193285702/1115165232415920159/slide-02.png?width=876&height=467",
    "https://media.discordapp.net/attachments/1043905461193285702/1115165233019883572/slide-01.png?width=876&height=467",
  ];

  const slides = slideImages.map((image, index) => (
    <div key={index}>
      <img src={image} alt={`Slider ${index + 1}`} style={{ width: "100%" }} />
    </div>
  ));

  return (
    <div id="top">
      <div className="container-fluid overflow-hidden">
        <div className="row">
          <div className="col-lg-4">
            <div className="left-content">
              <div className="inner-content">
                <h4>Dailo</h4>
                <h6>THE BEST EXPERIENCE</h6>
                <div className="main-white-button scroll-to-section">
                  <a href="#reservation">Make A Reservation</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <Slider {...settings}>{slides}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
