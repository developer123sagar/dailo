import React, { useState } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/flex-slider.css";
import "../assets/css/font-awesome.css";
import "../assets/css/lightbox.css";
import "../assets/css/owl-carousel.css";
import "../assets/css/templatemo-klassy-cafe.css";
import Popup from "./Popup";
import Modal from "react-modal";

export default function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numberGuest, setNumberGuest] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("numberGuest", numberGuest);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("message", message);

    try {
      const response = await fetch(event.target.action, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.log("Error occurred during form submission:", error);
    }
    setName("");
    setEmail("");
    setPhone("");
    setNumberGuest("");
    setDate("");
    setTime("");
    setMessage("");
    handleClosePopup();
    setModalIsOpen(true);
  };

  return (
    <section className="section overflow-hidden" id="reservation">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            backgroundColor: "#328a85",
            color: "lightsteelblue",
            position: "absolute",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
          },
        }}
      >
        <h2>Reservation confirmed!</h2>
        <p>We look forward to serving you.</p>
        <button
          onClick={() => setModalIsOpen(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
          }}
        >
          X
        </button>
      </Modal>
      {/* {isPopupOpen && <Popup handleClose={handleClosePopup} />} */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-text-content">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <h2>
                  Here You Can Make A Reservation Or Just walk-in to our cafe
                </h2>
              </div>
              <p>
                Experience culinary bliss at Dailo, a haven for epicures in
                Kathmandu's business district. Our skilled hands create
                exquisite dishes with love and passion, ensuring a safe dining
                experience. Indulge in a diverse menu of Nepalese, Indian,
                Continental, and Oriental cuisine, complemented by specialty
                cocktails.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="phone">
                    <i className="fa fa-phone"></i>
                    <h4>Phone Numbers</h4>
                    <span>
                      <a href="#">+977 </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="message">
                    <i className="fa fa-envelope"></i>
                    <h4>Emails</h4>
                    <span>
                      <a href="#">Dailohosiptality@gmail.com</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form">
              <form
                id="contact"
                action="https://script.google.com/macros/s/AKfycbz1zffV3ckGv3JcUQBkMKq2Jw_6jt_KcV-mjU4N3RfX6OfVCWUOMmNOr6dpZuXILvKA7Q/exec"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <h4>Table Reservation</h4>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <fieldset>
                      <input
                        type="text"
                        placeholder="Your Name*"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <fieldset>
                      <input
                        name="phone"
                        type="text"
                        id="phone"
                        placeholder="Phone Number*"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <fieldset>
                      <select
                        name="numberGuest"
                        id="number-guests"
                        value={numberGuest}
                        onChange={(e) => setNumberGuest(e.target.value)}
                      >
                        <option value="number-guests">Number Of Guests</option>
                        <option name="1" id="1">
                          1
                        </option>
                        <option name="2" id="2">
                          2
                        </option>
                        <option name="3" id="3">
                          3
                        </option>
                        <option name="4" id="4">
                          4
                        </option>
                        <option name="5" id="5">
                          5
                        </option>
                        <option name="6" id="6">
                          6
                        </option>
                        <option name="7" id="7">
                          7
                        </option>
                        <option name="8" id="8">
                          8
                        </option>
                        <option name="9" id="9">
                          9
                        </option>
                        <option name="10" id="10">
                          10
                        </option>
                        <option name="11" id="11">
                          11
                        </option>
                        <option name="12" id="12">
                          12
                        </option>
                        {/* Other options */}
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <div id="filterDate2">
                      <div
                        className="input-group date"
                        data-date-format="dd/mm/yyyy"
                      >
                        <input
                          name="date"
                          id="date"
                          type="text"
                          className="form-control"
                          placeholder="dd/mm/yyyy"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                        <div className="input-group-addon">
                          <span className="glyphicon glyphicon-th"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <fieldset>
                      <select
                        name="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      >
                        <option value="time">Time</option>
                        <option name="Breakfast" id="Breakfast">
                          Breakfast
                        </option>
                        <option name="Lunch" id="Lunch">
                          Lunch
                        </option>
                        <option name="Dinner" id="Dinner">
                          Dinner
                        </option>
                        {/* Other options */}
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        id="message"
                        placeholder="Message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button-icon"
                      >
                        Make A Reservation
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
