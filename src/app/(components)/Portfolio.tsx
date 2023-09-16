import React from "react";
import PortfolioItem, { PortfolioItemProps } from "./PortfolioItem";



const portfolioData : PortfolioItemProps[] = [
  {
    id: 1,
    title: 'Popcorn Fun',
    github: "https://github.com/reduardo92/PopCornFun",
    description: `I love watching movies and TV, with wanted to create my own
    website where I could search for my favorite show, movie and
    actor see there info`,
    skills: ["React", "Next.js", "Style components"],
    site: "https://popcornfun.herokuapp.com/",
    mobile: "/img/screens/popcornMB.jpg",
    tablet:"/img/screens/popcornTB.jpg",
    laptop: "/img/screens/popcornLT.jpg",
  },
  {
    id: 2,
    title: 'Fit On',
    github: "https://github.com/reduardo92/fitOn",
    description: `A gym website where they can advertise there gym.`,
    skills: ["React", "Next.js", "Style components"],
    site: "https://fiton.netlify.com/",
    mobile: "/img/screens/fitonMB.jpg",
    tablet:"/img/screens/fitonTB.jpg",
    laptop: "/img/screens/fitonLT.jpg",
  },
  {
    id: 3,
    title:` Simone's Bar`, 
    github: "https://github.com/reduardo92/simones_Bar",
    description: `A local bar in Chicago in the heart of pilsen. I re-design there
    website.`,
    skills: ["React", "Next.js", "Style components"],
    site: "https://simonesbar.netlify.com/",
    mobile: "/img/screens/simonesMB.jpg",
    tablet:"/img/screens/simoneTB.jpg",
    laptop: "/img/screens/simonesLT.jpg",
  },
  {
    id: 4,
    title: 'Find Your Cocktail',
    github: "https://github.com/reduardo92/find_your_cocktail",
    description: `A cocktail recipe website, a website where I could search for a
    drink ingredients`,
    skills: ["React", "Express.js", "Style components", "Bootstrap"],
    site: "https://find-your-cocktails.herokuapp.com/",
    mobile: "/img/screens/findMB.jpg",
    tablet:"/img/screens/findTB.jpg",
    laptop: "/img/screens/findLT.jpg",
  },
  {
    id: 5,
    title: 'Palos Car Wash',
    github:"https://github.com/reduardo92/palos_car_wash",
    description: `My local car wash, I wanted to redesign there old website with
    some a new design`,
    skills: ["React", "Style components"],
    site: "https://paloscarwash.netlify.app/",
    mobile: "/img/screens/palosMB.jpg",
    tablet:"/img/screens/palosTB.jpg",
    laptop: "/img/screens/palosLT.jpg",
  },
  {
    id: 6,
    title: 'Studio Cuts 2',
    github: "https://github.com/reduardo92/studioCuts",
    description: `My friends barbershop, had an old website. I wanted to re-design
    it to more of there type of shop colors`,
    skills: ["Html 5", "Sass", "Javascript"],
    site: "https://studiocuts.netlify.app/",
    mobile: "/img/screens/cutsMB.jpg",
    tablet:"/img/screens/cutsTB.jpg",
    laptop: "/img/screens/cutsLT.jpg",

  }
]




const Portfolio = () => {
  return (
    <section className="bg-image portfolio section" id="portfolio">
      <div className="p-content mx-width cont">
        <div className="title">
          <h3 className="top">Recent Work</h3>
          <h2 className="bottom">My Portfolio</h2>
        </div>
        <div className="portfolio--content">
          {/* Portfolio Items */}
          {portfolioData.map((item) => 
            PortfolioItem(item)
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
