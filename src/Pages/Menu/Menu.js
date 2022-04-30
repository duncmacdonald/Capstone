import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import MenuItem from "../../Components/MenuItem/MenuItem";
import AddToCart from "../../Components/AddToCart/AddToCart";
import CheckoutButton from "../../Components/CheckoutButton/CheckoutButton";

import axios from "axios";

const URL = "http://localhost:3333/";

export default class Menu extends React.Component {
  state = {
    restaurantId: this.props.match.params.restaurantId,
    choice: "none",
    quantity: 1,
    checkout: 0,
    menu: [],
  };


  componentDidUpdate() {
    const cart = JSON.parse(sessionStorage.getItem("cart"));
    if (cart !== null) {
      const items = cart
        .map((item) => item.quantity)
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        );
      if (items !== this.state.checkout) {
        this.setState({ checkout: items });
      }
    }
  }

  componentDidMount() {
    axios.get(`${URL}menu/`, {params: {restaurant_id: this.state.restaurantId}}).then(data => this.setState({menu: data.data}));
  }

  menuListener = (id) => {
    const dish = this.state.menu.find(item => item.id === id)
    this.setState({ choice: {id: id, name: dish.name, description: dish.description, price: dish.price}, quantity: 1 })
  };

  addToCartListener = (action) => {
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
          sessionStorage.setItem(
            "cart",
            JSON.stringify([
              ...JSON.parse(sessionStorage.getItem("cart")),
              { itemId: this.state.choice, quantity: this.state.quantity },
            ])
          );
        } else {
          sessionStorage.setItem(
            "cart",
            JSON.stringify([
              { itemId: this.state.choice, quantity: this.state.quantity },
            ])
          );
        }

        this.setState({ choice: "none", quantity: 1 });
        break;
    }
  };

  render() {
    const menuSectionTitle = (this.state.menu.length > 0) ? this.state.menu[0].menu_section : "";
    const menuJSX = (this.state.menu) ? this.state.menu.map(item => <MenuItem key={item.id+ Date.now()} id={item.id} name={item.name} description={item.description} price={item.price} listener={this.menuListener}/>) : <></> ;
    return (
      <div className="Menu">
        <h1>{menuSectionTitle}</h1>
        <ul>
          {menuJSX}
        </ul>
        {this.state.choice !== "none" ? (
          
          <AddToCart
            name={this.state.choice.name}
            description={this.state.choice.description}
            price={this.state.choice.price}
            quantity={this.state.quantity}
            listener={this.addToCartListener}
          />
        ) : (
          <></>
        )}
        {this.state.checkout > 0 && this.state.choice === "none" ? (
          <Link to="/checkout"><CheckoutButton itemCount={this.state.checkout} /></Link>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
