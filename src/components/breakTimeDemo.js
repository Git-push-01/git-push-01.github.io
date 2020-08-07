import React from "react";
import { Card, Embed } from "semantic-ui-react";
import breakTime from "../images/breakTime.jpeg"

const BreakTimeDemo = () => (
  <Card fluid={true} raised={true}>
    <Card.Content>
      <Card.Header>Break Time App Demo</Card.Header>
      <Card.Header>
        Break-time scheduler for frontline employees to keep track of
        break-times and improve efficiency
      </Card.Header>
      <Card.Description>
        <Embed
         aspectRatio='16:9'
         placeholder= {breakTime}
          autoplay={false}
          iframe={{
            allowFullScreen: true,
            style: {
              padding: 10,
            },
          }}
          url="https://drive.google.com/file/d/1uDRVCahj3pXSmdwozqMDKhJT57R9RErC/view?usp=sharing"
          source='google'
        />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default BreakTimeDemo;
