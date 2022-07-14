import React from "react";
import Logo from "../../logo.svg";
import Search from "./assets/search.png";
import "./styles.css";
import Arrow from "../PostsFilter/assets/arrow.png";

function Header({ setShowLoginModal }) {
  return (
    <header className="d-none d-lg-block">
      <div className="container">
        <div className="row align-items-center" style={{ padding: "16px 0" }}>
          {/* logo */}
          <div className="col-3">
            <img src={Logo} alt="company logo" />
          </div>
          {/* search */}
          <div className="col-6">
            <form
              className="w-100 d-flex align-items-center justify-content-between"
              id="header-search-form"
            >
              <button>
                <img src={Search} alt="search icon" />
              </button>
              <input
                type="text"
                className=""
                placeholder="Search for your favorite groups in ATG"
              />
            </form>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <span
              id="header-cta"
              className="d-flex align-items-center"
              onClick={(e) => setShowLoginModal(true)}
            >
              Create account. <b style={{ color: "#2f6ce5" }}>It's free!</b>
              <img src={Arrow} alt="down arrow" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
