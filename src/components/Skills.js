import factData from "../data/facts.json";

const Skills = () => {
  const facts = factData.map((fact, index) => {
    return <li key={index}>{fact.fact}</li>;
  });
  const randomFact = Math.floor(Math.random() * facts.length);
  return (
    <>
      <h2 className="skills__title">Otras curiosidades...</h2>
      <p>{facts[randomFact]}</p>
    </>
  );
};
export default Skills;
