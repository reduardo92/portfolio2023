import React from "react";

const About = () => {
  return (
    <section className="about addBox section" id="about">
      <div className="about--content cont mx-width">
        <div className="about--content__avatar">
          <div className="avatar--img"></div>
        </div>
        <div className="about--content__text">
          <div className="title">
            <h3 className="top">Hello</h3>
            <h2 className="bottom">About Me</h2>
          </div>
          <div className="para">
            Hello! My name is Eduardo Rivas, an web developer. I have always
            been a dedicated and determined individual who sets goals for
            himself. Therefore, when I developed an interest for programming I
            did not hesitate to turn my interest into a possible career. Having
            learned most of my skills through self-teaching, I have developed
            valuable skills that are reflected in my work. Learning from
            mistakes and successes I have completed various projects and hope to
            keep expanding my knowledge and creating more material
          </div>
        </div>
        <div className="about--content__email email--box">
          <a
            className="far fa-envelope icon"
            href="mailto:eduardoeerivas299@gmail.com"
            target="_top"
          ></a>
          eduardoeerivas299@gmail.com
        </div>
        <div className="about--content__phone email--box">
          <a className="fas fa-mobile-alt icon" href="tel:773-226-3407"></a>+1 -
          773 - 226 - 3407
        </div>
        <div className="about--content__links">
          <a
            href="https://github.com/reduardo92"
            rel="noopener"
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
        <a
          className="btn"
          target="_blank"
          href="../../../public/img/Eduardo_Rivas_Resume.pdf"
          rel="noopener"
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default About;
