import React from "react";
import Card from "./Card";
import axios from "axios";
import "./SearchResults.css";

class SearchResults extends React.Component {
    // initalizing state
    constructor() {
        super();
        this.state = {
            searchResults: []
        }
        console.log("constructor firing")
    }

    // fetching API request after render
    componentDidMount() {
        console.log("CDM firing")
        axios
            .get("http://localhost:5000/api/players")
            .then(res => {
                console.log("Success", res.data)
                // res.data
                this.setState({
                    searchResults: res.data
                })
                // console.log("searchResults", res.data)
            })
            .catch(err => {
                console.log("request error", err)
            })
    }

    // rendering components
    // Woo! its working
    render() {
        console.log("rendering...")
        return (
            <div className="card-wrapper">
                {this.state.searchResults.map((player, id) => {
                    return <Card key={id} searchResults={player} />
                })}
            </div>
        );
    }
}

export default SearchResults;