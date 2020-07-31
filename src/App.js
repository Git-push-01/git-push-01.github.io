import React from "react";
import Menu from "./menu";
import PortfolioContainer from "./portfolioContainer";
import "./App.css";
import { Segment } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Segment attached="top">Hugo Escandon Portfolio</Segment>
      <Menu />
      <PortfolioContainer />
    </div>
  );
}

export default App;
