import React from "react";
import MenuContainer from "./containers/menuContainer";
import PortfolioContainer from "./containers/portfolioContainer";
import "./App.css";
import { Segment } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Segment attached="top">Hugo Escandon Portfolio</Segment>
      <MenuContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
