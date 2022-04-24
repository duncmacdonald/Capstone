import React from "react";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import logo from "../../Assets/RestaurantImages/yuko-maki-logo.png";
import hero from "../../Assets/RestaurantImages/yuko-maki-menu-image-large.jpg";

export default class Restaurants extends React.Component {
  state = {
    logo: logo,
    hero: hero,
    name: "Yuko Maki",
    address: "1540 Lonsdale Avenue",
    rating: "9.8",
  };

  render() {
    return (
      <RestaurantCard
        hero={this.state.hero}
        logo={this.state.logo}
        name={this.state.name}
        address={this.state.address}
        rating={this.state.rating}
      />
    );
  }
}
