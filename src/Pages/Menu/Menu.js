import React from "react";
import "./Menu.css";
import MenuItem from "../../Components/MenuItem/MenuItem";

export default class Menu extends React.Component {
  state = {
    restaurantId: this.props.match.params.restaurantId,
    choice: undefined,
  };

  menuListener = (id) => this.setState({choice: id });

  render() {
    return (
      <div className="Menu">
        <h1>Menu Section Title</h1>
        <ul>
          <MenuItem
            id={1}
            name={"Pasta"}
            description={"noodles and sauce"}
            price={8.99}
            listener={this.menuListener}
          />
          <MenuItem
            id={2}
            name={"Soup"}
            description={"It's wet"}
            price={8.99}
            listener={this.menuListener}
          />
        </ul>
      </div>
    );
  }
}
