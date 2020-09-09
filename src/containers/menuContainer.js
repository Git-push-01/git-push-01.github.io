import React from "react";
import { Tab } from "semantic-ui-react";
// import Bio from "../components/bio";
import Info from "../components/info";
import Education from "../components/education";
import TechSkill from "../components/techSkill";

const panes = [
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

  return (
    <Tab

      defaultActiveIndex={0}
      menu={{ inverted: true, borderless: true, fluid: true, vertical: false, tabular: false }}
      panes={panes}
      fluid="true"
      centered="true"
      rounded="true"
    />
  );
};
export default MenuContainer;
