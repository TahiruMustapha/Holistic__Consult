import React from "react";
import "./Footer.css";
import logo from "../NavBar/logo/Logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p className="NavText">Holistic</p>
      </div>
      <div className="footer-details">
        <div className="footer-about-us">
          <h3>About Us</h3>
          <p>
            Holistic Counselling and Training Consult Ltd is a limited liability
            company established to train and develop skills and relevant
            knowledge in the practice of care, Counselling, and Coaching in
            church and beyond. Its personnel and vast skill development courses
            are accredited by the Ghana Psychology Council.
          </p>
        </div>
        <div>
          <h3>Site Map</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Phone</h3>
          <p className="address-info"> 0244598994 / 0243531413</p>
          <h3>Email</h3>
          <p className="address-info">
            <a href="googlemail.com">holisticcounsellingconsult@gmail.com</a>
          </p>
          <h3>Address</h3>
          <p className="address-info">P.O. BOX OS 2345, Dansoman - Accra</p>
        </div>
        <div className="suscribe-session">
          <h3>Socials</h3>
          <p className="suscribe-text">
            Get in touch through our social links <br /> Tell us your problem.
          </p>
          <div className="socials">
            <p className="socials-box">
              <a
                href="https://wa.me/+233244598994"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaWhatsapp className="social-links" />
              </a>
            </p>
            <p className="socials-box">
              <a
                href="mailto:holisticcounsellingconsult@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaMailBulk className="social-links" />
              </a>
            </p>
            <p className="socials-box">
              <a
                href="https://www.instagram.com/holistic_consultofficial/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram className="social-links" />
              </a>
            </p>
            <p className="socials-box">
              <a
                href="https://twitter.com/HolisticConsult"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTwitter className="social-links" />
              </a>
            </p>
            <p className="socials-box">
              <a
                href="https://www.tiktok.com/@holisticconsult"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTiktok className="social-links" />
              </a>
            </p>
            <p className="socials-box">
              <a
                href="https://web.facebook.com/holisticconsult"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook className="social-links" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">
        &copy;2022 Holistic Consult. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
