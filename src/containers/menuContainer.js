import React from "react";
import { Tab } from "semantic-ui-react";
import Info from "../components/info";
import Education from "../components/education";
import TechSkill from "../components/techSkill";

const panes = [
  {
    menuItem: " Contact Info",
    render: () => <Info  />,
  },
  {
    menuItem: "Technical Skills",
    render: () => <TechSkill />,
  },
  {
    menuItem: "Education",
    render: () => <Education />,
  },
];

const MenuContainer = () => {
  return (
    <Tab

      defaultActiveIndex={1}
      
      menu={{
        attached: false,
        pointing: true,
        inverted: true,
        borderless: true,
        fluid: true,
        vertical: false,
        tabular: false,
      }}
      panes={panes}
    />
  );
};
export default MenuContainer;
