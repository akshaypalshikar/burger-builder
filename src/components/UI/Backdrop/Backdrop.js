import React from 'react';
import backdropCss from './Backdrop.css';

const backdrop =  (props) => (
    props.show ? <div className={backdropCss.Backdrop} onClick={props.backdropClicked}></div> : null
);
export default backdrop;