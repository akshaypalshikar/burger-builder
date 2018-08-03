import React from 'react';
import buttonCss from './Button.css';

const button = (props) => (
    <button className={[buttonCss.Button, buttonCss[props.buttonType]].join(' ')}
        onClick={props.clicked} >{props.children}</button>
);


export default button;