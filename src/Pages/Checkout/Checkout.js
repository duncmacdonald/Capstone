import React from "react";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import CartItems from "../../Components/CartItems/CartItems";
import axios from "axios";
import "./Checkout.css"
import { Redirect } from "react-router-dom";


const URL = "http://localhost:3333/";

export default class Checkout extends React.Component {
  state = {
    signIn: true,
    restauraunts: [],
    serverData: {},
    render: false,
    redirect: false,
  };

  submitOrder = () =>{
    axios.put(`${URL}checkout`, this.state.serverData[0])
    .then(() => {
      sessionStorage.removeItem('cart');
      this.setState({redirect: true});
    });
  }


  componentDidMount() {
    this.setState({
      restauraunts: JSON.parse(sessionStorage.getItem("restaurants")),
    });

    axios
      .post(`${URL}checkout`, {
        userId: 1,
        cart: JSON.parse(sessionStorage.getItem("cart")),
      })
      .then((result) =>
        this.setState({ serverData: result.data, render: true })
      )
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {}


  render() {
    return (
      
      <section className="Checkout">
        {(this.state.redirect) ? (<Redirect to="/account" />) : (<></>)}
        {this.state.render === true ? (
          <>
            <section className="YourOrder">
              <h1>Your order</h1>
              <CartItems data={this.state.serverData[1]} />
              <button onClick={this.submitOrder}>Submit</button>
            </section>
          </>
        ) : (
          <></>
        )}
      </section>
    );
  }
}
