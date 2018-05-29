import React from 'react';

import Logo from '../../assets/images/logo-01.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={Logo} alt="My Pizza" />
    </div>
);

export default logo;