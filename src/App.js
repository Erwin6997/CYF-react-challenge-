import React from "react";
import Showall from "./Showall";
import Footer from "./Footer";


import "./App.css";

const App = () => {
  return (
    <div className="App">
      <heading className="App-header">
        CYF challenge
        <img
          className="App-logo "
          src=" https://image.flaticon.com/icons/svg/139/139899.svg "
        />
      </heading>

      <Showall />
      <Footer />
    </div>
  );
};

export default App;
