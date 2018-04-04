import React, { Component } from 'react'
import NewTweedForm from './new-tweed-form'; 

class Tweedr extends Component {
    constructor(props) {
        super(props);
    }

    async getAllTweeds() {
        const response = await fetch('/tweeds');
        const data = await response.json();




        // const response = await fetch('/tweeds');
        // const data = await response.json();

        this.setState({
            tweeds: data
        });
    }

    async createNewTweed(tweedBody) {
        await fetch('/tweeds')
        method: 'POST'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
    }

    componentDidMount() {
        this.getAllTweeds();
    }

    render() {
        return (
            <div>
                <h1>TESTING</h1>
            </div>
        )
    }
}

export default Tweedr; 