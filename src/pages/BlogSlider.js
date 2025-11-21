import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blogs() {
  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3 style={{ height: "100px", backgroundColor: "#c0c0c0", marginLeft: "1px", marginRight: "1px", marginTop: "3px" }}>1</h3>
        </div>
        <div>
          <h3 style={{ height: "100px", backgroundColor: "#c0c0c0", marginLeft: "1px", marginRight: "1px", marginTop: "3px" }}>2</h3>
        </div>
        <div>
          <h3 style={{ height: "100px", backgroundColor: "#c0c0c0", marginLeft: "1px", marginRight: "1px", marginTop: "3px" }}>3</h3>
        </div>
        <div>
          <h3 style={{ height: "100px", backgroundColor: "#c0c0c0", marginLeft: "1px", marginRight: "1px", marginTop: "3px" }}>4</h3>
        </div>
        <div>
          <h3 style={{ height: "100px", backgroundColor: "#c0c0c0", marginLeft: "1px", marginRight: "1px", marginTop: "3px" }}>5</h3>
        </div>
        <div>
          <h3 style={{ height: "100px", backgroundColor: "#c0c0c0", marginLeft: "1px", marginRight: "1px", marginTop: "3px" }}>6</h3>
        </div>
        <div>
          <h3 style={{ height: "100px", backgroundColor: "#c0c0c0", marginLeft: "1px", marginRight: "1px", marginTop: "3px" }}>7</h3>
        </div>
        <div>
          <h3 style={{ height: "100px", backgroundColor: "#c0c0c0", marginLeft: "1px", marginRight: "1px", marginTop: "3px" }}>8</h3>
        </div>
        <div>
          <h3 style={{ height: "100px", backgroundColor: "#c0c0c0", marginLeft: "1px", marginRight: "1px", marginTop: "3px" }}>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Blogs;
