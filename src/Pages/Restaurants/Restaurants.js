import React from "react";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import logo from "../../Assets/RestaurantImages/yuko-maki-logo.png";
import hero from "../../Assets/RestaurantImages/yuko-maki-menu-image-large.jpg";
import "./Restaurants.css"

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
      <section className="RestaurantsNearYou">
        <h1>Restaurants Near You</h1>
        <RestaurantCard
          hero={this.state.hero}
          logo={this.state.logo}
          name={this.state.name}
          address={this.state.address}
          rating={this.state.rating}
        />

      </section>

    );
  }
}
