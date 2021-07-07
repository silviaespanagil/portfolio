import portrait from "../../images/silvia.png";

const Presentation = () => {
  return (
    <>
      <section className="presentation">
        <div className="text-animation">
          <h2 className="text">Hola mundo, soy Silvia...</h2>
        </div>
        <div className="NeonSquare" />
        <div className="NeonBigSquare" />
        <div className="presentation__portrait">
          <img
            className="presentation__portrait--img"
            src={portrait}
            alt="Silvia"
          />
        </div>
      </section>
    </>
  );
};

export default Presentation;
