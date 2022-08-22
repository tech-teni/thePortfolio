import React from "react";
import MiniServices from "./MiniServices";

const Work = () => {
  return (
    <div className="">
      <section className="work">
        <h2 className="do">Services</h2>
        <div className="liney2"></div>
        <div className="habour">
          <MiniServices
            cover="cover"
            trans="trans1"
            slide="slide1"
            i="fas fa-pencil-alt"
            h4="DESIGN"
            p=" Gathering user requirement, designing graphic elements and building
            navigation components. I enjoy designing UX, UI, Web, Apps with the
            help of design tools like"
            bold="Figma , pen and paper and sketch"
            house="house"
          />
          <MiniServices
            cover="cover2"
            trans="trans2"
            slide="slide2"
            i="fas fa-laptop-code"
            h4="FRONT-END "
            p="I build responsive websites for an optimal user experience that
            achieves your business goals. I like to code from the scratch
            and enjoy bringing ideas to life in the browser with the help of
            dev tools"
            bold="VScode, Github"
            house="house2"
          />

          <MiniServices
            cover="cover3"
            trans="trans3"
            slide="slide3"
            i="fas fa-store-slash"
            h4="BACK-END"
            p="Collaborate with the front-end to integrate user-facing elements with server sidelogic and database application. Troubleshoot and debug application "
            bold="With express, mongodb and Nodejs"
            house="house3"
          />
        </div>
      </section>
    </div>
  );
};

export default Work;
