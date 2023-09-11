import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <div id="footer-container">
      <div className="first-container">
        <div className="child-one">
          <img
            src="https://www.masaischool.com/images/footer/arrow-gif.gif"
            alt="arrow-gif"
          />
        </div>
        <div className="child-two">
          <span>Get Started</span>
          <span>Join the Program</span>
        </div>
        <div className="child-third">
          <span>Get your dream job</span>
        </div>
      </div>
      <div className="second-container">
        <div className="masai-logo">
          <img
            src="https://www.masaischool.com/images/footer/masai-logo-dark.svg"
            alt="masai school"
          />
        </div>
        <div className="masai-contacts">
          <span>Follow us - </span>
          <img
            src="https://www.masaischool.com/images/footer/twitter-logo.svg"
            alt="twitter"
          />
          <img
            src="https://www.masaischool.com/images/footer/facebook-logo.svg"
            alt="facebook"
          />
          <img
            src="https://www.masaischool.com/images/footer/linkedin-logo.svg"
            alt="linkedin"
          />
          <img
            src="https://www.masaischool.com/images/footer/instagram-logo.svg"
            alt="instagram"
          />
          <img
            src="https://www.masaischool.com/images/footer/github-logo.svg"
            alt="github"
          />
          <img
            src="https://www.masaischool.com/images/footer/youtube-logo.svg"
            alt="youtube"
          />
        </div>
      </div>
      <div className="third-container">
        <div className="courses">
          <div>
            <span>Full Stack Web Development - Full Time</span>
            <span>Data Analytics - Full Time</span>
            <span>Mobile Development - Full Time</span>
            <span>Software Testing & Automation - Full Time</span>
            <span>Backend Development - Full Time</span>
          </div>
          <div className="blogs">
            <div>
              <span>Success Stories</span>
              <span>Our Team</span>
              <span>Careers</span>
              <span>Masai Blog</span>
              <span>Talent Circle</span>
            </div>
            <div>
              <span>Hire From Us</span>
              <span>Our Investors</span>
              <span>Newsroom</span>
              <span>Contact Us</span>
              <span>Become Coach</span>
            </div>
            <div>
              <span>About Us</span>
              <span>FAQ</span>
              <span>Referral Program</span>
              <span>Masai Learn</span>
              <span>Industry Mentors</span>
            </div>
          </div>
        </div>
        <div className="community">
          <span>Connect with a growing</span>
          <span>community of learners</span>
          <div>
            <img
              src="data:image/png;base64,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"
              alt="telegram"
            />
            <span>JOIN OUR TELEGRAM</span>
          </div>
        </div>
      </div>
      <div className="fourth-container">
        <div>
            <span>© 2023 by Masai School | A Nolan Edutech Pvt Ltd Venture</span>
        </div>
        <div>
            <span>Privacy Policy & Terms and Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
