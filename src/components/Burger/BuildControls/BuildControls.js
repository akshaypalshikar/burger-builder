import React from 'react';
import buildControlsCss  from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
];

const buildControls = (props) => (
    <div className={buildControlsCss.BuildControls}>
        <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(
            control=><BuildControl add = {()=>props.add(control.type)} remove={()=>props.remove(control.type)} 
                        key={control.label} label={control.label}
                        disable={props.disable[control.type]}/>
        )}
    </div>
);

export default buildControls;