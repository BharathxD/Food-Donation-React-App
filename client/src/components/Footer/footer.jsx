import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="border-top">
    <div>
      <span className="footer-head">© 2022 Food Donation Committee, Inc</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/"><i className="bi bi-meta"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/"><i className="bi bi-twitter"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/"><i className="bi bi-linkedin"></i></a></li>
    </ul>
  </footer>
  );
};

export default Footer;
