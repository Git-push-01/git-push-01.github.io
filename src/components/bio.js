import React from "react";
import { Popup, Card, Image} from "semantic-ui-react";
import hugoPic from "../images/hugoPic.jpeg";

const Bio = () => (
  <Card fluid={true} raised={true}>
    <Image size="small" src={hugoPic} centered />
    <Card.Content>
      <Card.Header>Hello, I'm Hugo Escandon</Card.Header>
      <Card.Header>Full-Stack Software Developer</Card.Header>
      <Card.Description>
        Two sisters move to the country with their father in order to be closer
        to their hospitalized mother, and discover the surrounding trees are
        inhabited by magical spirits.
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Bio;
