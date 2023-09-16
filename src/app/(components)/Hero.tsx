import React from 'react'
// import HeroVideo from '../../../public/img/bg/herovideo.mp4'

const Hero = () => {
  return (
    <section className="hero" id="home">
    <div className="hero--content">
      <div className="hero--content__avatar">
        <div className="avatar--img"></div>
      </div>
      <h1 className="hero--content__title">Eduardo Rivas</h1>
      <h2 className="hero--content__subtitle">
        I build amazing experinces, and i love what i do.
      </h2>
      <div className="hero--content__links">
        <a
          href="https://github.com/reduardo92"
          target="_blank"
          rel="noopener"
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
        className="btn btn--outline"
        target="_blank"
        href="./img/Eduardo_Rivas_Resume.pdf"
        rel="noopener"
        >DOWNLOAD CV</a>
      
    </div>
    <video autoPlay muted loop className="video--bg">
      <source src='../../../public/img/bg/herovideo.mp4' type="video/mp4" />
    </video>
    {/* <!-- <div className='bg--mobile'></div> --> */}
  </section>  )
}

export default Hero