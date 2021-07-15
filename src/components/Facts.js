import factData from "../data/facts.json";

const Facts = () => {
  const facts = factData.map((fact, index) => {
    return <>{fact.fact}</>;
  });
  const randomFact = Math.floor(Math.random() * facts.length);
  return (
    <>
      <p className="presentation__facts">
        Una curiosidad sobre mi: {facts[randomFact]}
      </p>
    </>
  );
};
export default Facts;
