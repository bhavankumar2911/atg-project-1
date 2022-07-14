import React from "react";
import Arrow from "./assets/arrow.png";
import AddPeople from "./assets/add-people.png";
import "./styles.css";

function PostsFilter({ setShowLoginModal }) {
  return (
    <>
      <section
        id="posts-filter"
        className="d-flex justify-content-between align-items-center d-lg-none"
      >
        <span>Posts(368)</span>
        <span className="bg-primary">
          <button className="btn btn-light btn-sm">
            Filter:All{" "}
            <img src={Arrow} alt="down arrow" id="posts-filter-arrow" />
          </button>
        </span>
      </section>
      <section className="d-none d-lg-block" style={{ marginBottom: "28px" }}>
        <div className="row g-0" id="posts-filter-lg">
          <div className="col-6 offset-1">
            <ul id="category-list" className="d-flex">
              <li>All Posts(32)</li>
              <li>Article</li>
              <li>Event</li>
              <li>Education</li>
              <li>Job</li>
            </ul>
            <hr />
          </div>
          <div className="col-4" id="posts-filter-lg-cta">
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-light btn-sm"
                style={{ backgroundColor: "#EDEEF0", marginRight: "16px" }}
                onClick={(e) => setShowLoginModal(true)}
              >
                Write a Post{" "}
                <img
                  src={Arrow}
                  alt="down arrow symbol"
                  style={{ marginLeft: "16px" }}
                />
              </button>
              <button
                className="btn btn-primary btn-sm"
                style={{ backgroundColor: "#2F6CE5" }}
                onClick={(e) => setShowLoginModal(true)}
              >
                <img src={AddPeople} alt="join group symbol" /> Join Group
              </button>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
}

export default PostsFilter;
