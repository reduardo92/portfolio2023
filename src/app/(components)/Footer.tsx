import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--content mx-width">
        <a href="#" className="logo footer--logo">
          <Image width={80} height={80} src="./img/logo.svg" alt="logo" className="logo--img" />
        </a>
        <a
          target="_blank"
          href="./img/Eduardo_Rivas_Resume.pdf"
          rel="noopener"
          className="btn btn--outline"
        >
          download cv
        </a>
        <div className="footer--icons">
          <a href="" target="_blank">
            <a className="fas fa-mobile-alt icon" href="tel:773-226-3407"></a>
          </a>
          <a href="" target="_blank">
            <a
              className="far fa-envelope icon"
              href="mailto:r.eduardo92@gmail.com"
              target="_top"
            ></a>
          </a>
          <a
            href="https://github.com/reduardo92"
            target="_blank"
            className="fab fa-github icon"
          ></a>
          <a
            href="https://www.linkedin.com/in/eduardo-enrique-rivas-3287a3b5/"
            rel="noopener"
            target="_blank"
            className="fab fa-linkedin-in icon"
          ></a>
        </div>
        <nav className="footer--nav">
          <a className="nav--links" href="#home">
            Home
          </a>
          <a className="nav--links" href="#about">
            About
          </a>
          <a className="nav--links" href="#portfolio">
            Portfolio
          </a>
          <a className="nav--links" href="#skills">
            Skills
          </a>
          <a className="nav--links" href="#contact">
            Contact
          </a>
        </nav>
      </div>
      <div className="footer--copyright">
        <p className="copy">© Design & Coded by Eduardo Rivas</p>
      </div>
    </footer>
  );
};

export default Footer;
