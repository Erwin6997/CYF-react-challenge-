import React, { useState } from "react";
import allCountryScores from "./data/Scores";
import Result from "./Result";

const Showall = () => {
  allCountryScores.sort((a, b) => (a.name > b.name ? 1 : -1));
  const [Order, Norder] = useState(false);
  return (
    <div className="card">
      <div>
        <p>High Scores Per Country </p>
        <button className="btn btn-primary"
          onClick={() => {
            Norder(!Order);
            }}>
          {Order ? "By Order" : "Not Order"}
        </button>
      </div>
          {allCountryScores.map((country, index) =>(
            <Result key={index} {...country} Order={Order}/>
          ))
          }
  </div>
  );
};



export default Showall;
