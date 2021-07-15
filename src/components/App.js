import React from "react";
//COMPONENTS
import Presentation from "./Presentation";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Tech from "./Tech";

//STYLESHEETS
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <Presentation />
      <AboutMe />
      <ProjectList />
      <Tech />
    </>
  );
}

export default App;
