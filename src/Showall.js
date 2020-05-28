import React from "react";
import allCountryScores from "./data/Scores";
const Showall = () => {
  return (
    <div className="card">
      <div>
        <p>High Scores Per Country </p>
      </div>
    {allCountryScores.map((Element, index) => {
      return(
        <div className="card1">
          <p key={index}> High Scores : {Element.name} </p>
          {Element.scores.map((elem, index) => {
            return (
              <div className="card2">
                <p key={index}>{elem.n} : {elem.s}</p>
              </div>
            );
          })
          }
        </div>
      );
    })
    }
    </div>
  );
}



export default Showall;
