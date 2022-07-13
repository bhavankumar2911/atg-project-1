import React from "react";
import Oval from "./assets/Oval.png";
import Rectangle from "./assets/Rectangle.png";
import Path from "./assets/Path.png";
import "./styles.css";

function ShapesRowInMobile() {
  return (
    <div
      className="bg-light d-flex justify-content-end align-items-center"
      id="shapes-row"
    >
      <img src={Rectangle} alt="rectangle" className="shape" />
      <img src={Oval} alt="oval" className="shape" />
      <img src={Path} alt="path" className="shape" />
    </div>
  );
}

export default ShapesRowInMobile;
