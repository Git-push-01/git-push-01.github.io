import React from "react";
import { Card, Image } from "semantic-ui-react";
import moodSwing from "../images/moodSwing.jpeg";

const MoodSwingDemo = () => (
  <Card fluid={true} raised={true}>
    <Card.Content>
      <Card.Header>Mood Swing Demo</Card.Header>
      Music video app that utilizes combinations of emojis to deliver a
      preloaded video playlist, with user customization
    </Card.Content>
    <Card.Description>
      <Image
        src={moodSwing}
        fluid
        size="large"
        rounded
        href="https://lit-castle-80970.herokuapp.com/users/sign_up"
      />
    </Card.Description>
  </Card>
);

export default MoodSwingDemo;
