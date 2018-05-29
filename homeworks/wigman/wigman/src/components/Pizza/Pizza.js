import React from 'react';

import classes from './Pizza.js';
import PizzaIngredients from './PizzaIngredients/PizzaIngredients';

const pizza = (props) => {
    return (
        <div> className={classes.Pizza}>
            <PizzaIngredients type="additional-topping" />
            <PizzaIngredients type="cheese" />
            <PizzaIngredients type="meat" />
            <PizzaIngredients type="pizza-crust" />
        </div>
    );
};

export default pizza; 