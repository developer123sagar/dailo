import React from "react";

import "../assets/css/bootstrap.min.css";
import "../assets/css/flex-slider.css";
import "../assets/css/font-awesome.css";
import "../assets/css/lightbox.css";
import "../assets/css/owl-carousel.css";
import "../assets/css/templatemo-klassy-cafe.css";

import chef1 from "../assets/images/chefs-01.jpg";
import chef2 from "../assets/images/chefs-02.jpg";
import chef3 from "../assets/images/chefs-03.jpg";

export default function Chef() {
  return (
    <section className="section overflow-hidden" id="chefs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 text-center">
            <div className="section-heading">
              <h6>Our Chefs</h6>
              <h2>We offer the best ingredients for you</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="chef-item">
              <div className="thumb">
                <div className="overlay"></div>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <img src={chef1} alt="Chef #1" />
              </div>
              <div className="down-content">
                <h4>Puskar Bhujel</h4>
                <span>Pastry Chef</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="chef-item">
              <div className="thumb">
                <div className="overlay"></div>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                </ul>
                <img src={chef2} alt="Chef #2" />
              </div>
              <div className="down-content">
                <h4>Duman Karki</h4>
                <span>Cookie Chef</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="chef-item">
              <div className="thumb">
                <div className="overlay"></div>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                </ul>
                <img src={chef3} alt="Chef #3" />
              </div>
              <div className="down-content">
                <h4>Anik Shrestha</h4>
                <span>Pancake Chef</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
