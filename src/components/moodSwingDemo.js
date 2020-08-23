import React from "react";
import { Card, Embed } from "semantic-ui-react";
import moodSwing from "../images/moodSwing.jpeg";

const MoodSwingDemo = () => (

  <Card fluid={true} raised={true} >
    <Card.Content>
      <Card.Header>Mood Swing Demo</Card.Header>
      <Card.Header>
      Music video app that utilizes combinations of emojis to deliver a preloaded video playlist, with user customization

      </Card.Header>
      <Card.Description>
        <Embed
          crossOrigin="anonymous"
          referrerPolicy="origin"
          aspectRatio="16:9"
          placeholder={moodSwing}
          url='https://lit-castle-80970.herokuapp.com/users/sign_up'
        />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default MoodSwingDemo;
