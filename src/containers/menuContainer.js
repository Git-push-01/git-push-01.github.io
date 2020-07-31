import React from 'react'
import { Tab } from 'semantic-ui-react'
import Bio from "../components/bio"

const panes = [
  { menuItem: 'Bio', render: () => <Tab.Pane><Bio/></Tab.Pane> },
  { menuItem: 'Info', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Technical Skills', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Education', render: () => <Tab.Pane>Tab 3s Content</Tab.Pane> }
]

const TabExampleVerticalTabular = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
)

export default TabExampleVerticalTabular
