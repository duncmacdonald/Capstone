import React from "react";
import "./Menu.css";
import MenuItem from "../../Components/MenuItem/MenuItem";
import AddToCart from "../../Components/AddToCart/AddToCart";

export default class Menu extends React.Component {
  state = {
    restaurantId: this.props.match.params.restaurantId,
    choice: "none",
    quantity: 1,
  };

  componentDidMount() {
    console.log(sessionStorage.getItem("cart"));
  }

  menuListener = (id) => this.setState({ choice: id, quantity: 1 });

  addToCartListener = (action) => {
    console.log(action);
    switch (action) {
      case "increment":
        this.setState({ quantity: this.state.quantity + 1 });
        break;
      case "decrement":
        this.setState({ quantity: this.state.quantity - 1 });
        break;
      case "close":
        this.setState({ choice: "none", quantity: 1 });
        break;
      case "save":
        if (sessionStorage.getItem("cart") !== null) {
          sessionStorage.setItem("cart", JSON.stringify([
            ...JSON.parse(sessionStorage.getItem("cart")),
            { itemId: this.state.choice, quantity: this.state.quantity },
          ]));
        } else {
          sessionStorage.setItem("cart", JSON.stringify([
            { itemId: this.state.choice, quantity: this.state.quantity },
          ]));
        }

        this.setState({ choice: "none", quantity: 1 });
        break;
    }
  };

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
        {this.state.choice !== "none" ? (
          <AddToCart
            name={"Pasta"}
            description={"noodles and sauce"}
            price={8.99}
            quantity={this.state.quantity}
            listener={this.addToCartListener}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
