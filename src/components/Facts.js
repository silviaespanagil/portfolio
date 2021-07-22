import React from "react";

//SERVICES
import factData from "../data/facts.json";

const Facts = () => {
  //Mapping of facts JSON
  const facts = factData.map((fact, index) => {
    return <>{fact.fact}</>;
  });

  //Random number function to take an index number to render

  const randomFact = () => {
    return Math.floor(Math.random() * facts.length);
  };

  return (
    <div className="presentation__facts">
      <p className="presentation__facts--fact">
        Una curiosidad sobre mi: {facts[randomFact()]}
      </p>
    </div>
  );
};
export default React.memo(Facts);
