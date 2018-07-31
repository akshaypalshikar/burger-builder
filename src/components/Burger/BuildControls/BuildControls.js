import React from 'react';
import buildControlsCss  from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'Bacon'},
    {label:'Cheese',type:'Cheese'},
    {label:'Meat',type:'meat'}
];

const buildControls = (props) => (
    <div className={buildControlsCss.BuildControls}>
        {controls.map(
            control=><BuildControl key={control.label} label={control.label}/>
        )}
    </div>
);

export default buildControls;