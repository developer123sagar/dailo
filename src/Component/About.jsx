import React from "react";

import "../assets/css/bootstrap.min.css";
import "../assets/css/flex-slider.css";
import "../assets/css/font-awesome.css";
import "../assets/css/lightbox.css";
import "../assets/css/owl-carousel.css";
import "../assets/css/templatemo-klassy-cafe.css";
import "../assets/css/display.css";

import AboutThumb01 from "../assets/images/about-thumb-01.jpg";
import AboutThumb02 from "../assets/images/about-thumb-02.jpg";
import AboutThumb03 from "../assets/images/about-thumb-03.jpg";

export default function About() {
  return (
    <section className="section overflow-hidden" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="left-text-content">
              <div className="section-heading">
                <h6>About Us</h6>
                <h2>We Leave A Delicious Memory For You</h2>
              </div>
              <p>
                Welcome to Dailo Daily See Us, located in the heart of Nepal's
                capital city, New Baneshwor. Our restaurant offers a diverse
                range of cuisines and dining experiences, catering to couples,
                families, and kids. With a passion for food and a commitment to
                excellence, we provide an unforgettable savory journey. Indulge
                in our extensive menu featuring traditional Nepalese delicacies,
                Asian flavors, and Western classNameics. From intimate settings
                for couples to spacious family-friendly sections and a dedicated
                play area for kids, we ensure every customer's needs are met.{" "}
                <br />
                <br />
                Make a reservation to secure your preferred dining time and
                explore our catering services for special events. Experience the
                best of Nepal's culinary delights at Dailo Daily See Us.
              </p>
              <div className="row">
                <div className="col-4">
                  <img src={AboutThumb03} alt="" />
                </div>
                <div className="col-4">
                  <img src={AboutThumb01} alt="" />
                </div>
                <div className="col-4">
                  <img src={AboutThumb02} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 w-96">
            <div className="right-content">
              <div className="thumb">
                <video
                  src="https://cdn.discordapp.com/attachments/1043905461193285702/1116054853156876328/WhatsApp_Video_2023-06-05_at_3.32.20_PM.mp4"
                  autoPlay
                  muted
                  controls
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
