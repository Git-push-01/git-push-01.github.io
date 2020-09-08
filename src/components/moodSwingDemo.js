import React from "react";
import { Card, Image } from "semantic-ui-react";
import moodSwing from "../images/moodSwing.jpeg";

const MoodSwingDemo = () => (
  <Card fluid={true} raised={true}>
    <Card.Content>
      <Card.Header>Mood-Swing</Card.Header>
      Music video app that utilizes combinations of emojis
    </Card.Content>

      <Image
        src={moodSwing}
        fluid
        centered
        rounded
        href="https://lit-castle-80970.herokuapp.com/users/sign_up"
      />
    
  </Card>
);

export default MoodSwingDemo;
