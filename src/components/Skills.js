import factData from "../data/facts.json";

const Skills = () => {
  const facts = factData.map((fact, index) => {
    return (
      <>
        <p className="skills__facts--text">{fact.fact}</p>
        <img
          src={fact.factImg}
          className="skills__facts--img"
          alt="Mis skills"
        />
      </>
    );
  });
  const randomFact = Math.floor(Math.random() * facts.length);
  return (
    <>
      <section className="skills">
        <h2 className="skills__title">Otras curiosidades...</h2>
        <p className="skills__facts">{facts[randomFact]}</p>
      </section>
    </>
  );
};
export default Skills;
