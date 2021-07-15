import { slide as Menu } from "react-burger-menu";
import Facts from "./Facts";
import portrait from "../images/silvia2.png";

const Presentation = () => {
  return (
    <>
      <Menu width={230}>
        <a href="#sobreMi" alt="Sobre mi">
          Conóceme
        </a>
        <a href="#proyectos" alt="Sobre mi">
          Mis proyectos
        </a>
        <a href="#techs" alt="Sobre mi">
          Tecnologías que uso
        </a>
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
