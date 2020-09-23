import React from "react";
import { Popup, Card, Image } from "semantic-ui-react";
import dogBarksLogo from "../images/dogBarksLogo.jpg";

const DogBarksDemo = () => (
  <Popup
    trigger={
      <Card fluid={true} raised={true}>
        <Card.Content textAlign="center">
          <Card.Header>Dog-Barks</Card.Header>
          Geolocation app that allows user to locate the nearest dog park
        </Card.Content>

        <Image
          src={dogBarksLogo}
          centered
          fluid
          rounded
          href="https://github.com/Git-push-01/DogBarks"
          target="_blank"
        />
      </Card>
    }
  >
    <Popup.Header>Check out GitHub Repo</Popup.Header>
  </Popup>
);

export default DogBarksDemo;
