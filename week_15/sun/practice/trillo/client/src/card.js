import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleInput = this.handleInput.bind(this);
        this.handkeSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        fetch('/cards', {
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then(function() {
            this.setState({
                task: ''
            });
        });
    }

    handleInput(e) {
        this.setState({
            task: e.target.value
        });
    }

    render() {
        return (
            <div id="new-card">
                <input id="new-card-text" type="text" placeholder="What do you need to do?" value={this.state.task} onChange={this.handleInput}/>
                <button id="new-card-button" onClick={this.handleSubmit}>Add Card</button>
            </div>
        )
    }
}

export default Card;
