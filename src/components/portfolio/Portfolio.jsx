import React, {useEffect} from "react";
import "./portfolio.css";
import IMG1 from "../../assets/foodexplorer.png";
import IMG2 from "../../assets/redflix.png";
import IMG3 from "../../assets/newsman.png";
import AOS from 'aos'
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Food Explorer - Food Delivery App",
    github: "https://github.com/roybishal/foodExplorer",
    demo: "https://food-explorer-mauve.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "RedFlix  - Netflix clone",
    github: "https://github.com/roybishal/Redflix",
    demo: "https://redflix-mocha.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "NewsMan - An infinite scrolling news App",
    github: "https://github.com/roybishal/NewsMan",
    //demo: "https://techieee.netlify.app/",
  }
  
  
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item" data-aos="slide-up">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 style={{textAlign:'center'}}>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank"> Github </a>
                <a href={demo} className="btn btn-primary" target="_blank" > Live Demo </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
