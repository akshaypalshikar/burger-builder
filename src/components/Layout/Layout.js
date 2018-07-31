import React from 'react';
import Wrapper from './../../hoc/Wrapper';
import layoutCssClasses from './Layout.css';

const layout = (props) => (
    <Wrapper>
        <div>Toolbar,SideDrawer,Backdrop</div>
        <main className={layoutCssClasses.Content}>
            {props.children}
        </main>
    </Wrapper>
);

export default layout;