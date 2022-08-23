import React from "react";

const AboutSection = () => {
  return (
    <div>
      <h2 id="about">About</h2>
      <div className="liney"></div>
      <section className="forGrid ">
        <div className="img-container ">
          <img src="img/teni.JPG" alt="" id="picture" />
        </div>
        <div className="details ">
          <p>
            Hello , I'm Ganiyat Yakub. My nickmane / brand-name is{" "}
            <i>tech-teni</i>, a Full-stack developer in Nigeria. I am a
            tech-enthusiast. I love to keep learning, continue challenging
            myself. I love combining the world of logic and creative design to
            make impressive , accessible, captivating and user-friendly websites
            and application. This is my portfolio where i share all of my
            favorite work. I create successful responsive websites that are
            fast, easy to use, and built with best practices.{" "}
          </p>
          <p>
            I am motivated to combine the art of design with the art of
            programming and translation of UI/UX design wireframes to actual
            code that will produce visual elements of the application. i have
            good communication skills, listening skill and team work
          </p>
          <p>
            The main area of my expertise is{" "}
            <b className="bold">
              HTML, CSS, Bootstrap, Javascript, React.js, MongoDB, Node.js, PHP
            </b>{" "}
            with a knowlegde of a version control system{" "}
            <b className="bold">Github</b> building small and medium web apps
            and coding interactive layouts. When i'm not designing things, I
            enjoy exercising, playing video games and drinking coffee
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
