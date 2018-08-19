import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import cssClasses from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

const sideDrawer = (props) => {
    let attachedCssClasses = [cssClasses.SideDrawer, cssClasses.Close];
    if (props.open) {
        attachedCssClasses = [cssClasses.SideDrawer, cssClasses.Open];
    }
    return (
        <Wrapper>
            <Backdrop show={props.open} backdropClicked={props.close} />
            <div className={attachedCssClasses.join(' ')}>
                <div className={cssClasses.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Wrapper>
    );
}

export default sideDrawer;