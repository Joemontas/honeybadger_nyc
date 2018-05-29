import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './PizzaIngredient.css';

class PizzaIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'plain' ):
                ingredient = <div className={classes.Plain}></div>;
                break;
            case ( 'ex_cheese' ):
                ingredient = <div className={classes.ExtraCheese}></div>;
                break;
            case ( 'meat' ):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ( 'veggies' ):
                ingredient = <div className={classes.Veggies}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

PizzaIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default PizzaIngredient;