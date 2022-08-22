import React from "react";

const Project = ({ href, imgSrc, p }) => {
  return (
    <>
      <a href={href} className="project project-tile">
        <img className="project-image" src={imgSrc} alt="project" />
        <p className="project-title">{p}</p>
      </a>
    </>
  );
};

export default Project;
