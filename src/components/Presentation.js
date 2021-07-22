//COMPONENTS
import Facts from "./Facts";
import MediaHeader from "./MediaHeader";
import BarMenu from "./BarMenu";
import portrait from "../images/silvia2.png";

const Presentation = () => {
  return (
    <header className="header">
      <MediaHeader />
      <BarMenu />
      <section className="presentation">
        <img className="presentation__portrait" src={portrait} alt="Silvia" />
        <div className="text-animation">
          <h2 className="text">Hola mundo, soy Silvia...</h2>
        </div>
        <Facts />
      </section>
    </header>
  );
};

export default Presentation;
