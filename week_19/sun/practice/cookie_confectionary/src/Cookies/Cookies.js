import React from 'react';

const cookieFlavor = (props) => {
    return (
    <div>
        <h1>{props.flavor} Cookie</h1>
        <div>{props.children}</div>
    </div>

    )
}




export default cookieFlavor;