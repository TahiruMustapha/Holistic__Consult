import React from "react";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

import "./Apply.css";
const Apply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const handleSubmit = (e) => {
    const formEl = document.querySelector("form");
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(formEl);
    fetch(
      "https://script.google.com/macros/s/AKfycbxuh9k_JVx0FKHqwsMaFWyX6CyqN_e3x2Hw7WBM24Sog_IW05hXYti8OL_AtUNVtMGT9g/exec",
      {
        method: "POST",
        body: formData,
      }
    );
    setName("");
    setEmail("");
    setPhone("");
    setProgram("");
  };
  return (
    <div className="apply">
      <div className="apply-bg">
        <h2>Apply To Our Programs</h2>
        <div>
          <p>Enroll Now.</p>
          <FaArrowDown className="apply-arrow-down" />
        </div>
      </div>
      <div className="apply-info">
        <h3>Apply Now</h3>
        <div className="apply-info-details">
          <div className="apply-user-info">
            <form
              className="form"
              autoComplete="off"
              onSubmit={(e) => handleSubmit(e)}
            >
              <p>
                <label>Name</label>
                <input
                  type="text"
                  id="apply-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                />
              </p>
              <p>
                <label>Email</label>
                <input
                  type="email"
                  id="apply-input"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <label>Phone</label>
                <input
                  type="number"
                  id="apply-input"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </p>
              <p>
                <label>What program are you interested in?</label>
                <select
                  id="drop-down-bnt"
                  name="program"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                >
                  {/* <div className='apply-dropdown'></div> */}
                  <option> Certificate In Pastorial Counsesillig.</option>
                  <option>Moral Injury Dimension.</option>
                </select>
              </p>

              <button type="submit" id="apply-btn">
                Submit message
              </button>
            </form>
          </div>
          <div className="apply-fees">
            <h4>Our Fees</h4>
            <div>
              <p>Lay Practitioner Certificate In Pastoral Counseling.</p>
              <p>GHS100</p>
            </div>
            <div>
              <p>Moral Injury Dimension And Their Treatment Module.</p>
              <p>GHS450</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
