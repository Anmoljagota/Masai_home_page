import React from "react";
import "../Styles/Elevate.css";
import ReactPlayer from "react-player";

const Elevate = () => {
  return (
    <div id="Main-Elevate-Container">
      <div className="Elevate-applyNow">
        <h2>
          <span className="Elevate-title-red">Elevate</span>Your Career
          Possibilities
        </h2>
        <p className="Elevate-para">
          It doesn’t matter where you come from, we know how to get you to your
          dream career.
        </p>
        <p>
          Our graduates consistently outperform students from top Indian
          engineering colleges & universities. 70% of companies who have hired 1
          Masai graduate come back to us with their hiring mandates.
        </p>
        <button className="Elevate-ApplyBtn">APPLY NOW</button>
      </div>
      <div className="Elevate-Youtube">
        <ReactPlayer
          url="https://youtu.be/Ji0ICdxTdqc"
          width="100%"
          height="82%"
        />
      </div>
    </div>
  );
};

export default Elevate;
