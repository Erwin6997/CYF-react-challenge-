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
          src="https://www.joypixels.com/images/logos/logo-icon-cyan.svg"
        />
      </heading>

      <Showall />
      <Footer />
    </div>
  );
};

export default App;
