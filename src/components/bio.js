import React from "react";
import { Segment, Image } from "semantic-ui-react";
import hugoPic from "../images/hugoPic.jpg";


const Bio = () => (
  <Segment
    inverted
    textAlign="center"
    as="h2"


    style={{

      fontSize: "1.5em",
      fontWeight: "normal",
      marginTop: "0.5em",
      marginBottom: "0.1em",
    }}
  >
    <Image size="medium" src={hugoPic} centered />
    Team-oriented Full Stack Software Developer with a passion for developing
    creative business solutions. Using my background in Computer Science and
    experience in Operations, I bring adaptability to challenging environments,
    with a detail-oriented approach to problem solving. I have a collaborative
    work ethic and a strong desire to learn new technologies. I am eager to
    utilize my skills in Javascript, React, Redux, Ruby, and Rails to
    effectively deliver the goals that my employer has set out to reach.
  </Segment>
);

export default Bio;
