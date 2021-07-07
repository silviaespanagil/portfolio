import ProjectCard from "./ProjectCard";

//SERVICES
import data from "../../data/projects.json";

const ProjectList = () => {
  const projects = data.map((project) => {
    return (
      <li key={project.id}>
        <ProjectCard
          name={project.name}
          description={project.description}
          codeLink={project.codeLink}
          appLink={project.appLink}
          img={project.imgURL}
        />
      </li>
    );
  });
  return (
    <>
      <h2 className="projects">Proyectos</h2>
      <ul className="projects">{projects}</ul>
    </>
  );
};

export default ProjectList;
