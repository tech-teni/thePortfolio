import React from "react";
import Project from "./Project";

const ProjectSection = () => {
  return (
    <div>
      <section id="projects" className="projects-section">
        <h2 className="projects-section-header " id="work">
          Work
        </h2>
        <div className="liney3"></div>

        <div className="projects-grid">
          <Project
            href="https://theformvalidator.netlify.app"
            imgSrc="img/form validateimage.jpg"
            p="The form validator"
          />
          <Project
            href="https://minimusicplayer.netlify.app"
            imgSrc="img/mini music player.jpeg"
            p="Mini music player"
          />
          <Project
            href="https://the-currency-converter1.netlify.app"
            imgSrc="img/lukasz-radziejewski-Zk5Kf3nVjQQ-unsplash.jpg"
            p="Currency converter"
          />
          <Project
            href="https://thehangmangame1.netlify.app"
            imgSrc="img/hang man.jpg"
            p="The hangman 1"
          />
          <Project
            href="https://theexpensetracker1.netlify.appp"
            imgSrc="img/expense .jpg"
            p="Expense tracker1"
          />
          <Project
            href="https://thebreakgame.netlify.app"
            imgSrc="img/break.jpeg"
            p="Paddle and bal"
          />
          <Project
            href="https://supreme-music.netlify.app"
            imgSrc="img/full music.jpg"
            p="supreme music website"
          />
          <Project
            href="https://github.com/tech-teni/4go"
            imgSrc="public/img/social.png"
            p="4go Social media App"
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
