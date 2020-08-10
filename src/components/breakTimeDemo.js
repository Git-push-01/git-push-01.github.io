import React from "react";
import { Card, Embed } from "semantic-ui-react";
import breakTime from "../images/breakTime.jpeg";

const BreakTimeDemo = () => (
  <Card fluid={true} raised={true}>
    <Card.Content>
      <Card.Header>Break Time App Demo</Card.Header>
      <Card.Header>
        Break-time scheduler for frontline employees to keep track of
        break-times and improve efficiency
      </Card.Header>
      <Card.Description>
        <Embed
          aspectRatio="16:9"
          placeholder={breakTime}
          url="https://break-time-frontend.herokuapp.com/login"
        />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default BreakTimeDemo;
