import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="bio"
              active={activeItem === "bio"}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name="Info"
              active={activeItem === "Info"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Technical Skills"
              active={activeItem === "Technical Skills"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Education"
              active={activeItem === "Education"}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
          
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
