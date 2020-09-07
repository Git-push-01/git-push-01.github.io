import React from "react";
import { Card } from "semantic-ui-react";
import BreakTimeDemo from "../components/breakTimeDemo";
import MoodSwingDemo from "../components/moodSwingDemo";

const PortfolioContainer = () => (
  <Card.Group>
  <Card>
 <BreakTimeDemo />
 </Card>
 <Card>
<MoodSwingDemo />
</Card>

</Card.Group>

)

export default PortfolioContainer;
