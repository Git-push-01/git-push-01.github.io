import React from "react";
import { Card, List } from "semantic-ui-react";

const Education = () => (
  <Card fluid={true} raised={true}>
    <Card.Content 
    >
      <Card.Header  textAlign='center'>Education</Card.Header>
      <Card.Description>
        <List bulleted >
          <List.Item>
            Flatiron School New York, NY Certificate of Full Stack Software
            Engineering, Dec 2019
          </List.Item>
          <List.Item>
            Union County College Cranford, NJ Associate Degree in Computer
            Science, May 2018
          </List.Item>
        </List>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Education;
