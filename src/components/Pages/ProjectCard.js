import portrait from "../../images/silvia.png";

const ProjectCard = () => {
  return (
    <>
      <li>
        <article className="projects__card">
          <h2 className="projects__card--title">Nombre proyecto</h2>
          <img
            className="projects__card--img"
            src={portrait}
            alt="Foto proyecto"
          />
          <p className="projects__card--description">Descripción proyecto</p>
          <a
            href="www.github.com/silviaespanagil"
            alt="link código"
            className="projects__card--code"
          >
            Ver código
          </a>
          <a
            href="www.github.com/silviaespanagil"
            alt="link código"
            className="projects__card--web"
          >
            Web
          </a>
        </article>
      </li>
    </>
  );
};

export default ProjectCard;
