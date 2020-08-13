import React from 'react'
import { Tab } from 'semantic-ui-react'
import BreakTimeDemo from "../components/breakTimeDemo"
import MoodSwingDemo from "../components/moodSwingDemo"


const panes = [
  {
    menuItem: 'Break Time Demo',
    render: () => <Tab.Pane ><BreakTimeDemo/></Tab.Pane>,
  },
  { menuItem: 'Mood Swing Demo', render: () => <Tab.Pane><MoodSwingDemo/></Tab.Pane> },
  { menuItem: 'Dog Barks Demo', render: () => <Tab.Pane>Dog Bark Demo</Tab.Pane> },
]

const PortfolioContainer = () => <Tab panes={panes} />

export default PortfolioContainer
