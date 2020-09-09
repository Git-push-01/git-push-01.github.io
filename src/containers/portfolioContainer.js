import React from "react";
import { Card } from "semantic-ui-react";
import BreakTimeDemo from "../components/breakTimeDemo";
import MoodSwingDemo from "../components/moodSwingDemo";
import DogBarksDemo from "../components/DogBarksDemo"

const PortfolioContainer = () => (
  <Card.Group centered   style={{ minHeight: 100, padding: '1em 0em' }}>
  <Card>
 <BreakTimeDemo />
 </Card>
 <Card>
<MoodSwingDemo />
</Card>
<Card>
<DogBarksDemo/>
</Card>

</Card.Group>

)

export default PortfolioContainer;
