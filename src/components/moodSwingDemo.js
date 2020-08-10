import React from "react";
import { Card, Embed } from "semantic-ui-react";
import moodSwing from "../images/moodSwing.jpeg";

const MoodSwingDemo = () => (
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
          placeholder={moodSwing}
          url="https://lit-castle-80970.herokuapp.com/users/sign_up"
        />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default MoodSwingDemo;
