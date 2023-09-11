import React from "react";
import "../Styles/Impect.css";
import ReactPlayer from "react-player";
const Impect = () => {
  return (
    <div id="Main-container">
      <h2 className="heading">
        Our Students Are <span>Creating Impact</span>
      </h2>
      <div className="content-reviews">
        <div>
        <ReactPlayer url="https://youtu.be/tSlit0vgB20" />
        </div>
        <div className="Reviews">
          
        </div>
      </div>
      
    </div>
  );
};

export default Impect;
