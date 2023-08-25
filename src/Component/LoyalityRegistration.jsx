import React, { useState } from "react";
import Swal from "sweetalert2";
import "./loyal.css";
import "../assets/css/bootstrap.min.css";

export default function LoyalityRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setaddress] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("dateOfBirth", `${day}/${month}/${year}`);

    try {
      const response = await fetch(event.target.action, {
        method: "POST",
        body: formData,
      });

      // ... handle response if needed

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setaddress("");
      setDay("");
      setMonth("");
      setYear("");

      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log("Error occurred during form submission:", error);
    }

    setIsLoading(false);
  };

  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        background: "linear-gradient(135deg, #71b7e6, #9b59b6)",
      }}
    >
      <div className="container2">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            height="100px"
            src="https://media.discordapp.net/attachments/1043905461193285702/1114603582751260712/dailo_final_logo.png?width=438&height=467"
            alt=""
          />
          <div
            style={{ color: "black", textDecoration: "underline" }}
            className="title"
          >
            Loyality Registration
          </div>
        </div>
        <div className="content">
          <form
            action="https://script.google.com/macros/s/AKfycbzwHMN6faz447Hu4qOzJwG_7CrgrW6kbFFYbor8QTbeS20_ZAY1XFi-0l5liIi1zNNd4g/exec"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Enter your number"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  type="text"
                  placeholder="Enter your location"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Date of Birth</span>
                <div className="dob-selectors">
                  <select value={day} onChange={handleDayChange} required>
                    <option value="">Day</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select value={month} onChange={handleMonthChange} required>
                    <option value="">Month</option>
                    {months.map((month, index) => (
                      <option key={index} value={index + 1}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select value={year} onChange={handleYearChange} required>
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="button">
              <input
                type="submit"
                id="form-submit"
                value="Submit"
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
