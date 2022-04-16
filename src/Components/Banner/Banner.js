import React from "react";
import illustration from "../../Photos/Illustration.png";
import "./Banner.css";
const Banner = () => {
  const buttonStyle = {
    border: "none",
    borderRadius: "33px",
    padding: "8px 28px 8px 28px",
    background: "#21B573",
    color: "white",
  };
  
  return (
    <div className="bgColor pt-5 pb-5">
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col-md-7">
            <p style={{ color: "tomato" }}>Are you ready to learn?</p>
            <h1 className="fw-bolder">
              Learn With fun
              <br /> in <span style={{ color: "#21B573" }}>any schedule.</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur <br />
              adipisicing elit. Distinctio, aliquam!
            </p>
            <button style={buttonStyle}>Get Started</button>
          </div>
          <div className="col-md-5">
            <img className="img-fluid " src={illustration} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
