import React from 'react';
import buildControlCss from './BuildControl.css';

const buildControl = (props) => (
    <div className={buildControlCss.BuildControl}>
        <div className={buildControlCss.Label}>{props.label}</div>
        <button className={buildControlCss.Less} 
            onClick={props.remove} 
            disabled={props.disable}>Less</button>
        <button className={buildControlCss.More} 
            onClick={props.add}>More</button>
    </div>
);
export default buildControl;