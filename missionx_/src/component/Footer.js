import React from "react";
import "./Home.css";



function Footer() {
  return (
    
    <div className="main-footer">
      <div className="container">
        <div className="row">
        <div className="col">
        <h4>Company</h4>
        <ul className="list-unstyled">
          <li>About Us</li>
          <li>Careers</li>
          <li>Partners</li>
        </ul>
      </div>
      <div className="col">
        <h4>Courses</h4>
        <ul className="list-unstyled">
          <li>Register</li>
          <li>Login</li>
          <li>Projects</li>
          <li>Teachers</li>
          <li>Parents</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className="col">
        <h4>Support</h4>
        <ul className="list-unstyled">
          <li>FAQs</li>
          <li>Helpdesk</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="col">
        <h4>Legal</h4>
        <ul className="list-unstyled">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="col">
        <h4>LevelUp Works</h4>
        <ul className="list-unstyled">
          <li>LevelUp works is an Auckland based enterprise
          dedicated to developing game-based learning software
          to help teachers in response to the New Zealand Digital
          Technologies & Hangarau Mattihiko.</li>
          <li>alan@levelupworks.com</li>
          <li>(021) 668 185)</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
