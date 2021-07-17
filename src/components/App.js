import React from "react";
//COMPONENTS
import Presentation from "./Presentation";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Tech from "./Tech";
import Footer from "./Footer";

//STYLESHEETS
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <Presentation />
      <AboutMe />
      <ProjectList />
      <Tech />
      <Footer />
    </>
  );
}

export default App;
