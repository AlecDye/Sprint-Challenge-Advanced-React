import React from "react";
import axios from "axios";

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
                console.log("Success", res)
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
    render() {
        console.log("rendering...")
        return (
            <div>
            </div>
        );
    }
}

export default SearchResults;