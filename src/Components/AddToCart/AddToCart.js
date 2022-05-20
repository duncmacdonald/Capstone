import {
  Close,
  AddCircleOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";
import React from "react";
import "./AddToCart.css";

export default function AddToCart({ id, name, description, quantity, price, listener }) {
  return (
    <div className="overlay">
      <div className="AddToCart">
        <div className="AddToCart__Top">
          <Close onClick={() => listener("close")}/>
          <h1>{name}</h1>
          <p>{description}</p>
          {/* <input type={Text}></input> */}

          <div className="AddToCart__Quantity">
            {quantity <= 1 ? (
              <RemoveCircleOutline htmlColor="#BFBFBF" />
            ) : (
              <RemoveCircleOutline onClick={() => listener("decrement")}/>
            )}
            <h1>{quantity}</h1>
            <AddCircleOutline onClick={() => listener("increment")}/>
          </div>
        </div>
        <div className="AddToCart__FooterButton" onClick={() => listener("save")}>
          <div className="narrow"></div>
          <h1>Add To Cart</h1>
          <h1 className="narrow">${quantity * price}</h1>
        </div>
      </div>
    </div>
  );
}
