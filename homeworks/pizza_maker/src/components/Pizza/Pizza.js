import React from 'react';

import classes from './Pizza.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const pizza = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <PizzaIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <h2>PLEASE START ADDING INGREDIENTS!</h2>;
    }
    return (
        <div className={classes.Pizza}>
            {transformedIngredients}
            <PizzaIngredient type="plain" />
        </div>
    );
};

export default pizza;