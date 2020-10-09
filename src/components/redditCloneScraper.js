import React from "react";
import { Popup, Card, Image } from "semantic-ui-react";
import redditClone from "../images/redditClone.jpg"

const DogBarksDemo = () => (
  <Popup
    trigger={
      <Card fluid={true} raised={true}>
        <Card.Content textAlign="center">
          <Card.Header>Reddit Scraper</Card.Header>
           Reddit Web Scraper using puppetter MongoDB and Twilio SMS API
        </Card.Content>

        <Image
          src={redditClone}
          centered
          fluid
          rounded
          href="https://github.com/Git-push-01/RedditClone"
          target="_blank"
        />
      </Card>
    }
  >
    <Popup.Header>Check out GitHub Repo</Popup.Header>
  </Popup>
);

export default DogBarksDemo;
