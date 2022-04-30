import "./CheckoutButton.css";

export default function CheckoutButton({itemCount, listener}){
    return(
        <div className="CheckoutButton" onClick={() => listener("checkout")}>
          <div className="narrow"></div>
          <h1>Checkout</h1>
          <h1 className="CheckoutButton__Count">{itemCount} Items</h1>
        </div>
    )
}