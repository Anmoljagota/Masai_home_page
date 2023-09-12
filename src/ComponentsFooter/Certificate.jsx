import React from "react";
import "../Styles/Certificate.css";

const Certificate = () => {
  return (
    <div id="Main-Certificate-Container">
      <div className="Certificate-img">
        <img
          src="https://www.masaischool.com/images/new-homepage/nsdc/nsdc-cert.jpg"
          alt="certificate"
        />
      </div>
      <div className="Certificate-title">
        <h2>
          <span>Certification </span>By The N.S.D.C
        </h2>
      </div>
      <div className="Certificate-desc">
        <p>
          NSDC Certification is a prestigious recognition for students who have
          completed accredited skill-based training programs. It validates their
          expertise, demonstrating their dedication to practical skills. This
          certification provides a competitive edge in the job market,
          showcasing proficiency and adherence to industry standards. NSDC
          certifications are widely accepted, unlocking rewarding career
          opportunities and personal growth.
        </p>
      </div>
    </div>
  );
};

export default Certificate;
