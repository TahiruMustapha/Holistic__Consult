import React from "react";
import { useState } from "react";
import "./Services3.css";
const Services3 = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="service3-container">
      <div className="service3-container-tab">
        <div
          className={toggleState === 1 ? "tabs active-tab" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <p>Counselling Services</p>
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tab" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <p>Coaching Services</p>
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tab" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <p>Training Services</p>
        </div>
      </div>
      <div
        className={
          toggleState === 1 ? "tabs-content active-content" : "tabs-content"
        }
      >
        <div>
          <div className="first-service">
            <i>Counselling Services</i>
            <h3>About Counselling</h3>
            <p>
              Our Counselling service makes a profound impact on the lives of
              individuals, families, and communities. We also help people
              navigate difficult life situations, such as the death of loved
              ones, divorce, natural disasters, school stress, and loss of job.
              We provide the tools and insights to manage mental health issues
              such as anxiety and depression. Ultimately our counselling empowers
              people to live a healthy and fulfilling life.
            </p>
          </div>
          <div className="second-service">
            <h2>Counselling Services</h2>
            <p>Premarital Counselling and Education.</p>
            <p>Post-Wedding Counselling.</p>
            <p>Marriage Counselling.</p>
            <p>Divorce Counselling.</p>
            <p>Crisis Counselling.</p>
            <p>Depression Counselling.</p>
            <p>Divorce and Sexual Dysfunction Counselling.</p>
          </div>
        </div>
      </div>
      <div
        className={
          toggleState === 2 ? "tabs-content active-content" : "tabs-content"
        }
      >
        <div>
          <div className="first-service">
            <i>Coaching Services</i>
            <h3>About Coaching</h3>
            <p>
              Our Coaching focuses directly on identifying what you wish to
              achieve in the present and future. We help you identify manageable
              goals and set tasks you can undertake to achieve your goals. We
              tend to use a combination of inquiry, diagrams, and exercises, to
              help you understand problem areas and identify ways to overcome
              them.
            </p>
          </div>

          <div className="second-service">
            <h2>Coaching Services</h2>
            <p>Marriage Coaching.</p>
            <p>Relationship Coaching.</p>
            <p>Life Coaching.</p>
            <p>Career Coaching.</p>
            <p>Leadership Coaching.</p>
          </div>
        </div>
      </div>
      <div
        className={
          toggleState === 3 ? "tabs-content active-content" : "tabs-content"
        }
      >
        <div>
          <div className="first-service">
            <i>Training Services</i>
            <h3>About Training</h3>
            <p>
              We educate trainees about any development policy changes. Trainee
              who receives extensive training prepares for higher leadership
              satisfaction. These training programs can help you determine the
              most beneficial option for your family, organization communities,
              and, situation. In this article, we discuss the benefits of
              effective training programs.
            </p>
          </div>

          <div className="second-service">
            <h2>Training Services</h2>
            <p>Leadership Training.</p>
            <p>Prepare-Enrich Facilitator.</p>
            <p>Continuing Professional.</p>
            <p>Developmental CPD Courses.</p>
            <p>Year Certificate in marriage and Counselling.</p>
            <p>Two-Year Diploma in Marriage And Family Counselling.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services3;
