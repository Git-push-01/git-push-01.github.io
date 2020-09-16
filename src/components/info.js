import React from "react";
import { Card, List } from "semantic-ui-react";

const Info = () => (
  <Card fluid={true} raised={true} >
    <Card.Content >
      <Card.Header  textAlign='center'>Contact Info</Card.Header>
      <Card.Description>
      <List divided >
        <List.Item>
         <List.Icon name='phone' size='large' verticalAlign='middle'/>
         <List.Content>
         (908) 380-4770
         </List.Content>
        </List.Item>
        <List.Item>
        <List.Icon name='mail' size='large' verticalAlign='middle'/>
        <List.Content>
        <a href='mailto:Hescandon6@gmail.com'>Hescandon6@gmail.com</a>
        </List.Content>
        </List.Item>
        <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
        <a href='https://github.com/Git-push-01'>@Git-push-01</a>
        </List.Content>
        </List.Item>
      </List>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Info;
