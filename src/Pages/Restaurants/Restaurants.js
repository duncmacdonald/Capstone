import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import "./Restaurants.css";


const URL = "http://localhost:3333/";

export default class Restaurants extends React.Component {
  state = {
    restaurants: [],
  };

  componentDidMount() {
    axios.get(`${URL}restaurants/`).then((response) => this.setState({restaurants: response.data}));
  }


  render() {

    let restaurantsJSX = (this.state.restaurants.length > 0) ? this.state.restaurants.map(restaurant => {return (<Link key={restaurant.id + Date.now()}to={`/restaurant/${restaurant.id}`}><RestaurantCard name={restaurant.name} logo={restaurant.logo} hero={restaurant.hero} address={restaurant.address} rating={"9.6"}/></Link>)}) : <></>;

    return (
      <section className="RestaurantsNearYou">
        <h1>Restaurants Near You</h1>
        {restaurantsJSX}
      </section>
    );
  }
}
