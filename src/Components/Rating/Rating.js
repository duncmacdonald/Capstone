import React from "react";
import "./Rating.css";

export default function Rating({score}){
    return (
        <div className="Rating">
            <h2>{score}</h2>
        </div>
    )
}