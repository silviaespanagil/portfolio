import React from "react";
import { useState, useEffect, useRef } from "react";

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
  //States
  let [showGoTop, setshowGoTop] = useState("goTopHidden");
  const [scrollPosition, setSrollPosition] = useState(0);

  //Ref for the ScrollUp action
  const refScrollUp = useRef();

  //HANDLER FUNCTIONS

  //Scroll position show/hide "top" button
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setshowGoTop("goTopHidden");
    }
  };

  //Scroll Up Handler
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  //Scroll Listener
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <>
      <div ref={refScrollUp}> </div>
      <Presentation />
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
      <AboutMe />
      <ProjectList />
      <Tech />
      <Footer />
    </>
  );
}

export default App;
