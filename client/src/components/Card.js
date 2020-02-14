import React from "react";

const Card = props => {
    return (
        <div className="card">
            <p>{props.searchResults.name}</p>
            <p>{props.searchResults.country}</p>
            <p>{props.searchResults.searches}</p>
        </div>
    )
}

export default Card;