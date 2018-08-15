import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import logoCss from './Logo.css';

const logo = (props) => (
    <div className={logoCss.Logo}>
        <img src={burgerLogo} alt='My Burger' />
    </div>
);
export default logo;