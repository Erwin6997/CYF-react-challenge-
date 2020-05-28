import React from "react";
import allCountryScores from "./data/Scores";
const Showall = () => {
  console.log(allCountryScores[1].name);
  // return (<div>
  //           <p>High Scores Per Country </p>
  //         </div>
  allCountryScores.map((Element, index) => {
      return (
        <div className="card1">
          <p key={index}> High Scores : {Element.name} </p>
          Element.map((element, index) => {
          <div>
            <p key={index}>{element.n}</p>
            <p key={index}>{element.s}</p> 
          </div>
        })
        </div>
      )
  })
};

export default Showall;
