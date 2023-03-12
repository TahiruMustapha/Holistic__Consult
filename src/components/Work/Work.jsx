import React from "react";
import "./Work.css";
import { FaScroll } from "react-icons/fa";
import paperWork from "../Work/Work-img/paperWork.jpg";
import discussingWork from "../Work/Work-img/discussingWork.jpg";
const Work = () => {
  return (
    <div className="work">
      <div className="work-text">
        <h2>How It Works?</h2>
        <FaScroll
          style={{ fontSize: "30px", marginLeft: "15px", color: "black" }}
        />
      </div>
      <div className="work-details">
        <div className="work-details1">
          <div>
            <i>Step 1</i>
            <h3>Book an appointment</h3>
            <p>
              Call the provided number to make further enquires of your choice
              and book an appointment to fit your schedule.
            </p>
          </div>
          <img src={paperWork} alt="paper work" />
        </div>
        <div className="work-details2">
          <div>
            <i>Step 2</i>
            <h3>
              Lets guide you find <br /> the best solution
            </h3>
            <p>
              {" "}
              Register to complete the booking process and fill out an intake
              assessment form. You can now schedule your meeting with a
              professional counselor.
            </p>
          </div>
          <img src={discussingWork} alt="paper work" />
        </div>
      </div>
    </div>
  );
};

export default Work;
