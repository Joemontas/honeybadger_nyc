import React, { Component } from 'react';
import SubComponent from './sub-component';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrc: 'http://fillmurray.com/200/200'
        }
    }

    componentWillMount() {
        console.log('COMPONENT WILL MOUNT');
    }

    componentDidMount() {
        console.log('COMPONENT DID MOUNT');
        this.setState({
            imageSrc: 'http://placecage.com/200/200'
        });
    }

    shouldComponentUpdate() {
        console.log('SHOULD COMPONENT UPDATE');
        // return true;
        return false;
    }

    componentDidUpdate() {
        console.log('COMPONENT DID UPDATE');
 }

    render() {
        console.log('RENDER');

        return (
            <div>
                <SubComponent
                    imageSrc={this.state.imageSrc}
                />
            </div>
        )
    }
};

export default ParentComponent;