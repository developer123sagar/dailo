import React, { useState } from "react";
import "./popup.css";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReservationClick = () => {
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <div className="popup">
          <div className="contentBox">
            <div className="close" onClick={handleClose}></div>
            <div className="imgBx">
              <img
                src="https://media.discordapp.net/attachments/1101637601988968459/1116203194243092550/grand-opening-red-helix-banner-removebg-preview.png?width=467&height=467"
                alt="Gift"
              />
            </div>
            <div className="content">
              <div>
                <h2>Special Offer</h2>
                <h2>
                  20 %<span>Off</span>
                </h2>
                <span>
                  Fill Up the reservation form and get 5-40 % discount !!!
                </span>
                <a href="#contact" onClick={handleReservationClick}>
                  Make A Reservation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
