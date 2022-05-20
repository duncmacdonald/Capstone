import "./CartItems.css";
import React from "react";

export default function CartItems({ data }){
    return(
        <section className="CartItems">
        {data.map(item => {return (<div className="CartItems__Item"><h3>{`${item.subtotal/item.price} x`}</h3><h3>{item.name}</h3><h3>${item.subtotal.toFixed(2)}</h3></div>)})}
        </section>
    )
}