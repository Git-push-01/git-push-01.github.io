import React from "react";
import { Card } from "semantic-ui-react";
import BreakTimeDemo from "../components/breakTimeDemo";
import MoodSwingDemo from "../components/moodSwingDemo";
import DogBarksDemo from "../components/DogBarksDemo";
import PortFolioDemo from "../components/portFolioDemo";
import RedditCloneScraper from "../components/redditCloneScraper"
import TriStateDemo from "../components/triStateDemo"


const PortfolioContainer = () => (
  <Card.Group  centered rounded="true" style={{minHeight: 100, padding: '1em 0em' }}>
 //  <Card>
 // <BreakTimeDemo />
 // </Card>
//  <Card>
// <MoodSwingDemo />
// </Card>
<Card>
<DogBarksDemo/>
</Card>
<Card>
<PortFolioDemo/>
</Card>
<Card>
<RedditCloneScraper/>
</Card>
<Card>
<TriStateDemo/>
</Card>
</Card.Group>

)

export default PortfolioContainer;
