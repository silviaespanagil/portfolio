import React from "react";
import { useState } from "react";
//SERVICES
import factData from "../data/facts.json";

const Facts = () => {
  const [factNumber, setFactNumber] = useState("0");

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

      <i
        className="fas fa-redo presentation__facts--shuffle"
        onClick={randomFact}
      ></i>
    </div>
  );
};
export default React.memo(Facts);
