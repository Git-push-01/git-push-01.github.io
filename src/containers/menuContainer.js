import React from "react";
import { Tab } from "semantic-ui-react";
import Info from "../components/info";
import Education from "../components/education";
import TechSkill from "../components/techSkill";

const panes = [
  {
    menuItem: " Technical Skills",
    render: () => < TechSkill  />,
  },
  {
    menuItem: "Contact Info",
    render: () => <Info />,
  },
  {
    menuItem: "Education",
    render: () => <Education />,
  },
];

const MenuContainer = () => {
  return (
    <Tab

      defaultActiveIndex={0}

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
