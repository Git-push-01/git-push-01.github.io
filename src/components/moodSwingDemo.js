import React from "react";
import { Popup, Card, Image } from "semantic-ui-react";
import moodSwing from "../images/moodSwing.jpg";

const MoodSwingDemo = () => (
  <Popup
    trigger={
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
          target="_blank"
        />
      </Card>
    }
  >
    <Popup.Header>Live Demo</Popup.Header>
  </Popup>
);

export default MoodSwingDemo;
