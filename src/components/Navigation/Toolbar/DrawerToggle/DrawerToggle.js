import React from 'react';
import cssClasses from './DrawerToggle.css';

const drawerToggle = (props) => {
/*     let appliedCssClasses = [cssClasses.Menu, cssClasses.Open];
    if (props.open) {
        appliedCssClasses = [cssClasses.Menu, cssClasses.Open];
    } else {
        appliedCssClasses = [cssClasses.Menu, cssClasses.Close];
    }
 */    
    return (
        //<div className={appliedCssClasses.join(' ')}
        <div className={cssClasses.DrawerToggle} onClick={props.handleClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
export default drawerToggle;