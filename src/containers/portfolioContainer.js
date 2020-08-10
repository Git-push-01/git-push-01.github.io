import React, { Component } from "react";
import { Menu, Segment} from "semantic-ui-react";
import BreakTimeDemo from "../components/breakTimeDemo"
import MoodSwingDemo from "../components/moodSwingDemo"

export default class PortfolioContainer extends Component{
  state = { activeItem: "1" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Segment attached="top">Technical Projects</Segment>

        <Menu attached="bottom" tabular icon>
          <Menu.Item

            name="1"
            active={activeItem === "1"}
            onClick={this.handleItemClick}
          >
            Mood Swing
            <MoodSwingDemo/>
          </Menu.Item>

          <Menu.Item
            name="2"
            active={activeItem === "2"}
            onClick={this.handleItemClick}
          >
            Break Time


            <BreakTimeDemo/>
          </Menu.Item>

          <Menu.Item
            name="3"
            active={activeItem === "3"}
            onClick={this.handleItemClick}
          >
          Dog Barks
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
