import React from "react";
import Arrow from "./assets/arrow.png";
import "./styles.css";

function PostsFilter() {
  return (
    <section
      id="posts-filter"
      className="d-flex justify-content-between align-items-center"
    >
      <span>Posts(368)</span>
      <span className="bg-primary">
        <button className="btn btn-light btn-sm">
          Filter:All{" "}
          <img src={Arrow} alt="down arrow" id="posts-filter-arrow" />
        </button>
      </span>
    </section>
  );
}

export default PostsFilter;
