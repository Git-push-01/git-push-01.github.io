import React from "react";
import { Popup, Card, Image } from "semantic-ui-react";
import triState from "../images/triState.jpg";

const TriStateDemo = () => (
  <Popup
    trigger={
      <Card fluid={true} raised={true} >
        <Card.Content textAlign="center">
          <Card.Header>Tri-StateEvents</Card.Header>
          Tri-state comedy events with diret links to purchase and info page on Ticket-Master
        </Card.Content>

        <Image
          src={triState}
          centered
          fluid
          rounded
          href="https://github.com/Git-push-01/TriStateEventsApp"
          target="_blank"
        />
      </Card>
    }
  >
    <Popup.Header>Check out GitHub Repo</Popup.Header>
  </Popup>
);

export default TriStateDemo;
