import React from "react";

class App extends React.Component {
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
        // google trends API for "Women's World Cup" Jun-July 2019 Worldwide coverage
        axios
            .get("http://localhost:5000/api/players")
            .then(res => {
                console.log(res)
                this.setState({
                    searchResults: res.data
                })
                console.log("searchResults", res.data)
            })
            .catch(err => {
                console.log("request error", err)
            })
    }

    // rendering components
    render() {
        console.log("rendering...")
        return (
            <div className="App">
            </div>
        );
    }
}

export default App;