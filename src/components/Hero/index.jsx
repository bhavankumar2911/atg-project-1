import React from "react";
import "./styles.css";
import arrow from "./assets/arrow.png";

function Hero({ setShowLoginModal }) {
  return (
    <section id="hero">
      <div
        className="text-white d-flex flex-column justify-content-between h-100 justify-content-lg-end"
        id="hero-container"
      >
        {/* top */}
        <div className="d-flex justify-content-between align-items-center d-lg-none">
          <a>
            <img src={arrow} alt="back arrow" />
          </a>
          <button
            className="btn btn-outline-light btn-sm"
            id="hero-button"
            onClick={(e) => setShowLoginModal(true)}
          >
            Join Group
          </button>
        </div>

        {/* bottom */}
        <div id="bottom">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
