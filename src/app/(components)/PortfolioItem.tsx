import Image from "next/image";
import React from "react";
import mobilePng from "../../../public/img/mobile.png";
import tabletPng from "../../../public/img/tablet.png";
import laptopPng from "../../../public/img/laptop2.png";


export interface PortfolioItemProps {
  id: number ;
  title: string;
  github: string;
  description: string;
  skills: string[];
  site: string; 
  mobile: string ;
  tablet: string;
  laptop: string;
  
}



const PortfolioItem = ({id,title,github,description,skills,site,mobile,tablet,laptop} : PortfolioItemProps) => {
  return (
    <div key={id} id={id.toString()} className="portfolio--content__card">
    <div className="portfolio--content__card--screens">
      <div className="carousel">
        <a className="carousel-item" href="#one!">
          <div className="screen-container mobile">
            <Image
            width={100} height={100}
              className="screen"
              alt="screen icon"
              src={mobilePng}
            />
            <div className="page">
              <Image
              width={100} height={100} alt="website page" src={mobile} />
            </div>
          </div>
        </a>
        <a className="carousel-item" href="#two!">
          <div className="screen-container tablet">
            <Image
            width={100} height={100}
              className="screen"
              alt="screen icon"
              src={tablet}
            />
            <div className="page">
              <Image
              width={100} height={100} alt="website page" src={tabletPng} />
            </div>
          </div>
        </a>
        <a className="carousel-item" href="#three!">
          <div className="screen-container laptop">
            <Image
            width={100} height={100}
              className="screen"
              alt="screen icon"
              src={laptop}
            />
            <div className="page">
              <Image
              width={100} height={100} alt="website page" src={laptopPng}/>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div className="portfolio--content__card--info">
      <h2 className="info--title">{title}</h2>
      <a
        href={github}
        target="_blank"
        className="github"
        rel="noopener"
      >
        <i className="fab fa-github icon"></i>
      </a>
      <p className="para">
        {description}
      </p>
      <div className="skills">
        {skills.map((skill, id) =>  <span key={id} className="animated-gradient">{skill}</span> )}
      </div>
      <a
        href={site}
        target="_blank"
        className="btn btn--outline"
        rel="noopener"
      >
        Visit site
      </a>
    </div>
  </div>
  )
}

export default PortfolioItem