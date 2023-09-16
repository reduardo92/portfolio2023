import Image from 'next/image'
import React from 'react'
import nextjsIcon from '../../../public/img/icons/nextJS.PNG'
import responsiveScreen from '../../../public/img/icons/resmobile.png'

const Skills = () => {
  return (
    <section className="skills addBox section" id="skills">
    <div className="skills--content mx-width cont">
      <div className="title">
        <h3 className="top">Things I Learned</h3>
        <h2 className="bottom">My Skills</h2>
      </div>
      <div className="skills--tabs">
        {/* <!-- HTML --> */}
        <div className="skills--tabs__tab">
          <i className="fab fa-html5 icon"></i>
          <p className="skills--tabs__tab--text">html</p>
        </div>
        {/* <!-- CSS --> */}
        <div className="skills--tabs__tab">
          <i className="fab fa-css3 icon"></i>
          <p className="skills--tabs__tab--text">css</p>
        </div>
        {/* <!-- JAVASCRIPT --> */}
        <div className="skills--tabs__tab">
          <i className="fab fa-js-square icon"></i>
          <p className="skills--tabs__tab--text">javascript</p>
        </div>
        {/* <!-- SCSS --> */}
        <div className="skills--tabs__tab">
          <i className="fab fa-sass icon"></i>
          <p className="skills--tabs__tab--text">scss</p>
        </div>
        {/* <!-- REACT --> */}
        <div className="skills--tabs__tab">
          <i className="fab fa-react icon"></i>
          <p className="skills--tabs__tab--text">react</p>
        </div>
        {/* <!-- NEXT.JS --> */}
        <div className="skills--tabs__tab">
         <Image
         width={50} height={50}
            src={nextjsIcon}
            alt="next.js icon"
            className="skills--tabs__tab--img"
          />
          <p className="skills--tabs__tab--text">next.js</p>
        </div>
        {/* <!-- NODE>JS --> */}
        <div className="skills--tabs__tab">
          <i className="fab fa-node icon"></i>
          <p className="skills--tabs__tab--text">node.js</p>
        </div>
        {/* <!-- RESPONSIVE DESIGN --> */}
        <div className="skills--tabs__tab">
         <Image
         width={50} height={50}
            src={responsiveScreen}
            alt="responsive design icon"
            className="skills--tabs__tab--img"
          />
          <p className="skills--tabs__tab--text">responsive design</p>
        </div>
        {/* <!-- FIGMA --> */}
        <div className="skills--tabs__tab">
          <i className="fab fa-figma icon"></i>
          <p className="skills--tabs__tab--text">FIGMA</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills