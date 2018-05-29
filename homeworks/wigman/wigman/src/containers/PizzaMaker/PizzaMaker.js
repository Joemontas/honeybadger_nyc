import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Pizza from '../../components/Pizza/Pizza';

class PizzaMaker extends Component {
    render () {
        return (
            <Aux>
                <Pizza />
                <div>Ingredients Mixer</div>
            </Aux>

        );
    }
}

export default PizzaMaker;