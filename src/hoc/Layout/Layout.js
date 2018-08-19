import React, { Component } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import layoutCssClasses from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClickHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState(
            (prevState) => (
                { showSideDrawer: !prevState.showSideDrawer }
            )
        );
    }
    render() {
        return (
            <Wrapper>
                <div>
                    <Toolbar sideDrawerToggleHandler={this.sideDrawerToggleHandler} />
                    <SideDrawer close={this.sideDrawerClickHandler} open={this.state.showSideDrawer} />
                    Backdrop</div>
                <main className={layoutCssClasses.Content}>
                    {this.props.children}
                </main>
            </Wrapper>
        );
    }
}

export default Layout;