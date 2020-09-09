import React from "react";
import { Card, Image } from "semantic-ui-react";
import breakTime from "../images/breakTime.jpeg";

const BreakTimeDemo = () => (
  <Card fluid={true} raised={true}>
    <Card.Content>
      <Card.Header>Break-Time</Card.Header>
      Break-time scheduler for frontline employees
    </Card.Content>

      <Image
        src={breakTime}
        centered
        fluid
        rounded
        href="https://break-time-frontend.herokuapp.com/login"
        target="_blank"
      />

  </Card>
);

export default BreakTimeDemo;
