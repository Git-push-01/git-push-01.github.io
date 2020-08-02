import React from 'react'
import { Tab } from 'semantic-ui-react'
import Bio from "../components/bio"
import Info from "../components/info"

const panes = [
  { menuItem: 'Bio', render: () => <Tab.Pane><Bio/></Tab.Pane> },
  { menuItem: ' Contact Info', render: () => <Tab.Pane><Info/></Tab.Pane> },
  { menuItem: 'Technical Skills', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Education', render: () => <Tab.Pane>Tab 3s Content</Tab.Pane> }
]

const MenuContainer = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
)

export default MenuContainer
