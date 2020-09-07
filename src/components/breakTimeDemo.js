import React from "react";
import { Card, Image } from "semantic-ui-react";
import breakTime from "../images/breakTime.jpeg";

const BreakTimeDemo = () => (
  <Card fluid={true} raised={true}>
    <Card.Content>
      <Card.Header>Break Time App Demo</Card.Header>
      Break-time scheduler for frontline employees to keep track of break-times
      and improve efficiency
    </Card.Content>
    <Card.Description>
      <Image
        src={breakTime}
        fluid
        size="large"
        rounded
        href="https://break-time-frontend.herokuapp.com/login"
      />
    </Card.Description>
  </Card>
);

export default BreakTimeDemo;
