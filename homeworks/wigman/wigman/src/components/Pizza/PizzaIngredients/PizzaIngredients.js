import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './PizzaIngredients.css';

class PizzaIngredients extends Component {
    render () {
        let ingredient = null;

            switch (this.props.type) {
                case ('pizza-crust'):
                    ingredient = <div className={classes.PizzaCrust}></div>
                    break;
                case ('additional-topping'):
                    ingredient = <div className={classes.AdditionalTopping}></div>
                    break;
                case ('meat'):
                    ingredient = <div className={classes.Meat}></div>
                    break; 
                case ('cheese'):
                    ingredient = <div className={classes.Cheese}></div>
                    break;
                case ('veggies'):
                    ingredient = <div className={classes.Veggies}></div>
                    break; 
                default:
                    ingredient = null;
            }

            return ingredient;
    }


}

PizzaIngredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default PizzaIngredients;