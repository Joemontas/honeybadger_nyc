import React from 'react';

const CardView = ({ inputValue, handleInput, handleSubmit }) => {
    return (
        <div id='new-card'>
            <input id='new-card-text' type="trext" placrholder="What do you need to do?" value={inputValue} onChange={handleInput}/>
            <button id="new-card-button" onClick={handleSubmit}>Add Card</button>
        </div>
    );
}

export default CardView;