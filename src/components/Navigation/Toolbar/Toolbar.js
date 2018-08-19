import React from 'react';
import toolbarCss from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={toolbarCss.Toolbar}>
        <DrawerToggle handleClick={props.sideDrawerToggleHandler} />
        <div className={toolbarCss.Logo}>
            <Logo />
        </div>
        <nav className={toolbarCss.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
export default toolbar;