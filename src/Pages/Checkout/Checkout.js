import React from "react";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import axios from "axios";

const URL = "http://localhost:3333/";

export default class Checkout extends React.Component {
    // state= {
    //     signIn: true,
    // }

    componentDidMount(){
        console.log("Checkout Mounted");
        //Get restaurant location, server item description, server price
        axios.post(`${URL}checkout)`, {items: sessionStorage.getItem("cart")}, {}).then(result => console.log(result));
        // axios.get(`${URL}checkout`, {params: {items: sessionStorage.getItem("cart")}})
        // .then(result => console.log(result));
    }
    
    render(){
        return (
            <section className="Checkout">
                <h1>Hello World</h1>
                {/* <RestaurantCard > */}
            </section>
        )
    }
}