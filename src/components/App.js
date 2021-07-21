import React from "react";
import { useState, useEffect } from "react";
//COMPONENTS
import Presentation from "./Presentation";
import GoTop from "./GoTop";
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Tech from "./Tech";
import Footer from "./Footer";

//STYLESHEETS
import "../stylesheets/App.scss";

function App() {
  //Scroll position that shows/hide "top" button

  let [showGoTop, setshowGoTop] = useState("goTopHidden");
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setshowGoTop("goTopHidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <>
      <Presentation />
      <GoTop showGoTop={showGoTop} />
      <AboutMe />
      <ProjectList />
      <Tech />
      <Footer />
    </>
  );
}

export default App;
