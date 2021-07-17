import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <article className="projects__card-items">
        <h2 className="projects__card--title">{props.name}</h2>
        <img
          className="projects__card--img"
          src={props.img}
          alt="Foto proyecto"
        />
        <p className="projects__card--description">{props.description}</p>
        <div className="projects__card--links">
          <a
            href={props.codeLink}
            alt="link código"
            className="projects__card--code"
          >
            <i className="fas fa-code projects__card--links-icons" />
          </a>
          <a
            href={props.appLink}
            alt="link código"
            className="projects__card--web"
          >
            <i className="fas fa-desktop projects__card--links-icons " />
          </a>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
