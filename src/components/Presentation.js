import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Facts from "./Facts";
import MediaHeader from "./MediaHeader";
import portrait from "../images/silvia2.png";

const Presentation = () => {
  //States
  let [isClosed, setClosed] = useState();

  //Menu handler that closes the menu when an option is clicked
  const closeMenuHandler = () => {
    if (isClosed === false) {
      debugger;
      return setClosed(true);
    } else {
      setClosed(false);
    }
  };
  return (
    <>
      <MediaHeader />
      <Menu isOpen={isClosed} width={230}>
        <a href="#sobreMi" alt="Sobre mi" onClick={closeMenuHandler}>
          Conóceme
        </a>
        <a href="#proyectos" alt="Sobre mi" onClick={closeMenuHandler}>
          Mis proyectos
        </a>
        <a href="#techs" alt="Sobre mi" onClick={closeMenuHandler}>
          Tecnologías que uso
        </a>

        <div>
          <ul className="bm-burger-socialsnav">
            <li>
              <a
                className="bm-burger-socialsnav-item"
                href="https://github.com/silviaespanagil"
                alt="Silvia's Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" bm-item fab fa-github-alt " />
              </a>
            </li>
            <li>
              <a
                className="bm-burger-socialsnav-item"
                href="https://www.linkedin.com/in/silviaespanagil/"
                alt="Silvia's LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" bm-item fab fa-linkedin-in " />
              </a>
            </li>
            <li>
              <a
                className="bm-burger-socialsnav-item"
                href="https://dev.to/silviaespanagil"
                alt="Silvia's Blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" bm-item fab fa-dev " />
              </a>
            </li>
          </ul>
        </div>
      </Menu>
      <section className="presentation">
        <img className="presentation__portrait" src={portrait} alt="Silvia" />
        <div className="text-animation">
          <h2 className="text">Hola mundo, soy Silvia...</h2>
        </div>
        <Facts />
      </section>
    </>
  );
};

export default Presentation;
