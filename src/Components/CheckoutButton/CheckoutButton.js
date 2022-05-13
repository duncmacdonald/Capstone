import "./CheckoutButton.css";

export default function CheckoutButton({itemCount, listener}){
    return(
        <div className="CheckoutButton">
          <div className="narrow"></div>
          <h1>Checkout</h1>
          <h1 className="CheckoutButton__Count">{itemCount} Items</h1>
        </div>
    )
}

//onClick={() => listener("checkout")}