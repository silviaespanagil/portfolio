import portrait from "../../images/silvia.png";
import portrait2 from "../../images/silvia2.png";

const Presentation = () => {
  return (
    <>
      <section className="presentation">
        <img
          className="presentation__portrait--img"
          src={portrait2}
          alt="Silvia"
        />
        <div className="text-animation">
          <h2 className="text">Hola mundo, soy Silvia...</h2>
        </div>
        {/*<div className="NeonBigSquare" />
        <div className="presentation__portrait">
        <img
          className="presentation__portrait--img"
          src={portrait}
          alt="Silvia"
        />
        </div>*/}
      </section>
    </>
  );
};

export default Presentation;
