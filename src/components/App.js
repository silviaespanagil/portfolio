import React from "react";
//COMPONENTS
import Presentation from "./Pages/Presentation";
import AboutMe from "./Pages/AboutMe";
import ProjectList from "./Pages/ProjectList";

//STYLESHEETS
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <Presentation />
      <AboutMe />
      <ProjectList />;
    </>
  );
}

export default App;
