import React from "react";

//SERVICES
import factData from "../data/facts.json";

const Facts = () => {
  //Mapping of facts JSON
  const facts = factData.map((fact, index) => {
    return <>{fact.fact}</>;
  });

  //Random number function to take an index number to render
  const randomFact = Math.floor(Math.random() * facts.length);

  return (
    <>
      <p className="presentation__facts">
        Una curiosidad sobre mi: {facts[randomFact]}
      </p>
    </>
  );
};
export default React.memo(Facts);
