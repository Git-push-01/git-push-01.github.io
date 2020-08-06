import React from "react";
import { Card } from "semantic-ui-react";

const TechSkill = () => (
  <Card fluid={true} raised={true}>
    <Card.Content>
      <Card.Header>TECHNICAL SKILLS</Card.Header>

      <Card.Description>
        <img
          src="https://img.icons8.com/color/144/000000/javascript.png"
          alt=""
        />
        <img
          src="https://img.icons8.com/color/144/000000/postgreesql.png"
          alt=""
        />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default TechSkill;
