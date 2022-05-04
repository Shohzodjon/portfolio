import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#serices">Services</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#port">Portfolio</a>
            </li>
            <li>
              <a href="#tes">Testimonials</a>
            </li>
          </ul>
        </div>
        <button className="button">Contact us </button>
      </div>
    </nav>
  );
}

export default Nav;
