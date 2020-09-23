import React from "react";
import { Popup, Card, Image } from "semantic-ui-react";
import hugoPic from "../images/hugoPic.jpg";

const PortFolioDemo = () => (
  <Popup
    trigger={
      <Card fluid={true} raised={true}>
        <Card.Content textAlign="center">
          <Card.Header>PortFolio Demo</Card.Header>
          JavaScript Application using Semantic React UI
        </Card.Content>

        <Image
          src={hugoPic}
          centered
          fluid
          rounded
          href="https://still-earth-44121.herokuapp.com/"
          target="_blank"
        />
      </Card>
    }
  >
    <Popup.Header>Viewing Now</Popup.Header>
  </Popup>
);

export default PortFolioDemo;
