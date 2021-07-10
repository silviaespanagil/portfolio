import React from "react";
//COMPONENTS
import Presentation from "./Presentation";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Tech from "./Tech";
import Skills from "./Skills";

//STYLESHEETS
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <Presentation />
      <AboutMe />
      <ProjectList />
      <Tech />
      <Skills />
    </>
  );
}

export default App;
