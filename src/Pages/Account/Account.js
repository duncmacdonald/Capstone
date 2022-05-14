import axios from "axios";
import React from "react";
import OrderHistory from "../../Components/OrderHistory/OrderHistory";
import MyQRCode from "../../Components/QRCode/MyQRCode";
import QRCode from "qrcode";
import "./Account.css";

const URL = "http://localhost:3333/";

export default class Account extends React.Component {
  state = {
    user: "Duncan Macdonald",
    userId: 1,
    orderHistory: [],
    modal: false,
    id: "",
    qr: "",
  };


  returnListener = (id) => {
    QRCode.toDataURL(`${URL}return/${id}`)
    .then((dataurl) => {
      this.setState({ qr: dataurl, modal: true });
    })
    .catch((err) => {
      console.error(err);
    });
    
  }

  QRListener = () => this.setState({ modal: false });

  componentDidMount() {
    axios
      .get(`${URL}orders`, {params: { user_id: 1 }})
      .then((result) => this.setState({orderHistory: result.data}));
  }

  render() {
    return !this.state.modal ? (
      <div className="Account">
        <section className="User">
          <h1>Duncan Macdonald</h1>
          <p>0 Total Dishes Returned</p>
        </section>
        <h1>OrderHistory</h1>
        <OrderHistory orderHistory={this.state.orderHistory} listen={this.returnListener} />
      </div>
    ) : (
      <MyQRCode url={this.state.qr} listener={this.QRListener} />
    );
  }
}
