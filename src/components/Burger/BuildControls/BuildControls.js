import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'Bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

function buildControls(props) {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                return <BuildControl key={ctrl.label} label={ctrl.label} type={ctrl.type} />
            })}
        </div>
    )
};

export default buildControls;