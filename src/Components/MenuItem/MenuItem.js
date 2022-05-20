import React from "react";
import "./MenuItem.css"

export default function MenuItem({id, name, description, price, listener}){

    return(
        <li className="MenuItem" onClick={() => listener(id)}>
            <h2>{name}</h2>
            <p>{description}</p>
            <h2>${price}</h2>
        </li>
    )
}