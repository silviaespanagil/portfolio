import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      {}
      <article className="projects__card">
        <h2 className="projects__card--title">{props.name}</h2>
        <img
          className="projects__card--img"
          src={props.img}
          alt="Foto proyecto"
        />
        <p className="projects__card--description">{props.description}</p>
        <div projects__card--links>
          <a
            href={props.codeLink}
            alt="link código"
            className="projects__card--code"
          >
            Ver código
          </a>
          <a
            href={props.appLink}
            alt="link código"
            className="projects__card--web"
          >
            Web
          </a>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
