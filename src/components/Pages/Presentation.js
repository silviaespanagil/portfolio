import portrait from "../../images/silvia2.png";

const Presentation = () => {
  return (
    <>
      <section className="presentation">
        <img className="presentation__portrait" src={portrait} alt="Silvia" />
        <div className="text-animation">
          <h2 className="text">Hola mundo, soy Silvia...</h2>
        </div>
      </section>
    </>
  );
};

export default Presentation;
