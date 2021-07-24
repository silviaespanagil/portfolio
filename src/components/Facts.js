import React from "react";
import { useState } from "react";
//SERVICES
import factData from "../data/facts.json";

const Facts = () => {
  const [factNumber, setFactNumber] = useState("1");

  //Mapping of facts JSON
  const facts = factData.map((fact, index) => {
    return <>{fact.fact}</>;
  });

  //Random number function to take an index number to render

  function randomFact() {
    return setFactNumber(Math.floor(Math.random() * facts.length));
  }
  return (
    <div className="presentation__facts">
      <p className="presentation__facts--fact">
        Una curiosidad sobre mi: {facts[factNumber]}
      </p>
      <div>
        <i class="fas fa-redo" onClick={randomFact}></i>
      </div>
    </div>
  );
};
export default React.memo(Facts);
