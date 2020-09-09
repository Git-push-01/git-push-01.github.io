import React from "react";
import MenuContainer from "./containers/menuContainer";
import PortfolioContainer from "./containers/portfolioContainer";

import "./App.css";
import { Segment } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Segment
        attached="top"
        inverted
        as="h1"
        style={{
          fontSize: "2em",
          fontWeight: "normal",
          
        }}
      >
        Hugo Escandon Portfolio
      </Segment>
      <MenuContainer />
      <Segment
        as="h2"
        inverted
        attached="top"
        style={{
          fontSize: "1.5em",
          fontWeight: "normal",
          marginTop: "1.5em",
        }}
      >
        Technical Projects
      </Segment>
      <PortfolioContainer />
    </div>
  );
}

export default App;
