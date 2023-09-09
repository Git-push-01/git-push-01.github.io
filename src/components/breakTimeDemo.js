import React from "react";
import { Popup, Card, Image } from "semantic-ui-react";
import breakTime from "../images/breakTime.jpg";

const BreakTimeDemo = () => (
  <Popup
    trigger={
      <Card fluid={true} raised={true} >
        <Card.Content textAlign="center">
          <Card.Header>Break-Time</Card.Header>
          Break-time scheduler for frontline employees
        </Card.Content>

        <Image
          src={breakTime}
          centered
          fluid
          rounded
          href="https://github.com/Git-push-01/break-time-frontend"
          target="_blank"
        />
      </Card>
    }
  >
    <Popup.Header>Live Demo</Popup.Header>
  </Popup>
);

export default BreakTimeDemo;
