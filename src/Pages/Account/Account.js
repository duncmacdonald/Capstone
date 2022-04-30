import React from "react";
import "./Account.css";

export default class Account extends React.Component {
  state = {
    user: "Duncan Macdonald",
    orderHistory: [],
  };

  render() {
    return (
      <div className="Account">
        <section className="User">
          <h1>Duncan Macdonald</h1>
          <p>0 Total Dishes Returned</p>
        </section>
        <section className="OrderHistory">
          <p>past orders go here</p>
          {/* <OrderCard></OrderCard> */}
        </section>
      </div>
    );
  }
}
