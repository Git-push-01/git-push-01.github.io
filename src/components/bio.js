import React from "react";
import { Segment, Image } from "semantic-ui-react";
import newHugo from "../images/hugoPicOne.jpg";

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
    <Image size="medium" src={newHugo} centered />
    Team-oriented Full Stack Software Developer; with a passion for developing
    creative business solutions. Using my background in Computer Science,
    interpersonal, and communications skills, I bring adaptability to
    challenging environments, with a detailed-oriented approach to
    problem-solving. I have a strong desire to learn new technologies and a
    collaborative work ethic. I am eager to apply my skillset in Javascript,
    React, Redux, Ruby, and Rails to effectively deliver the goals that my
    employer has set out to reach.
  </Segment>
);

export default Bio;
