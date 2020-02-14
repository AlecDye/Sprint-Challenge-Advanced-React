import React from "react";
import "./Card.css";

const Card = props => {
    return (
        <div className="card">
            <h2>{props.searchResults.name}</h2>
            <p>{props.searchResults.country}</p>
            <p>Google Searches: {props.searchResults.searches}</p>
        </div>
    )
}

export default Card;