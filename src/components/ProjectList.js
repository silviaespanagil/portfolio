import ProjectCard from "./ProjectCard";

//SERVICES
import data from "../data/projects.json";

const ProjectList = () => {
  //FILTER ACTIVE PROJECTS
  const activeProject = data.filter((project) => {
    return project.status === "active";
  });

  //MAP PROJECTS TO RENDER
  const projects = activeProject.map((project) => {
    return (
      <li className="projects__card" key={project.id}>
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
      <h2 className="projectsTitle" id="proyectos">
        Proyectos
      </h2>
      <ul className="projects">{projects}</ul>
    </>
  );
};

export default ProjectList;
