import React, { useState } from "react";
import { Tab, Popup } from "semantic-ui-react";
import Bio from "../components/bio";
import Info from "../components/info";
import Education from "../components/education";
import TechSkill from "../components/techSkill";

const panes = [
  {
    menuItem: "Bio",
    render: () => (
      <Tab.Pane>
        <Bio />
      </Tab.Pane>
    ),
  },
  {
    menuItem: " Contact Info",
    render: () => (
      <Tab.Pane>
        <Info />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Technical Skills",
    render: () => (
      <Tab.Pane>
        <TechSkill />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Education",
    render: () => (
      <Tab.Pane>
        <Education />
      </Tab.Pane>
    ),
  },
];

const MenuContainer = () => {
const [isShown, notShown] = useState(false);
  return (
    <Tab
      defaultActiveIndex={0}
      onMouseEnter={()=> isShown(true)}
      onMouseLeave={()=> notShown(false)}
      menu={{ fluid: true, vertical: true, tabular: true }}
      panes={panes}
    />
  );
};
export default MenuContainer;
