import React from "react";
import OrderHistory from "../../Components/OrderHistory/OrderHistory";
import QRCode from "../../Components/QRCode/QRCode";
import "./Account.css";

export default class Account extends React.Component {
  state = {
    user: "Duncan Macdonald",
    orderHistory: [],
    modal: false,
  };

  ReturnListener = () => this.setState({modal: true});

  QRListener = () => this.setState({modal: false});

  render() {
    return (
      (!this.state.modal) ? (
      <div className="Account">
        <section className="User">
          <h1>Duncan Macdonald</h1>
          <p>0 Total Dishes Returned</p>
        </section>
        <h1>OrderHistory</h1>
        <OrderHistory listener={this.ReturnListener}/>
      </div>
      ) : (
        <QRCode listener={this.QRListener}/>
      )
    );
  }
}
