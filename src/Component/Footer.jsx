import React from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/flex-slider.css";
import "../assets/css/font-awesome.css";
import "../assets/css/lightbox.css";
import "../assets/css/owl-carousel.css";
import "../assets/css/templatemo-klassy-cafe.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <div className="right-text-content">
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
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="logo">
              <a href="index.html">
                <img src="assets/images/white-logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <div className="left-text-content">
              <p>
                © Copyright Dailo Hospitality Co.
                <br />
                Developer: Digital Guide Nepal
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
