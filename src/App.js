import React from "react";
import MenuContainer from "./containers/menuContainer";
import PortfolioContainer from "./containers/portfolioContainer";
import Bio from "./components/bio";
import "./App.css";
import { Segment, Container } from "semantic-ui-react";

function App() {
  return (
    <div className="container" >
      <Container>
        <Segment
          attached="top"

          inverted
          textAlign="center"
          as="h2"
          style={{
            fontSize: "1.5em",
            fontWeight: "normal",
            marginTop: "0.5em",
            marginBottom: "0.1em",
          }}
        >
          Hello, I'm Hugo Escandon Full-Stack Software Developer
        </Segment>
        <Bio />
        <MenuContainer />
        <Segment
          textAlign="center"
          as="h2"
          inverted
          attached="top"
          style={{
            fontSize: "1.5em",
            fontWeight: "normal",
            marginTop: "0.5em",
          }}
        >
          Technical Projects
        </Segment>
        <PortfolioContainer />
      </Container>
    </div>
  );
}

export default App;
