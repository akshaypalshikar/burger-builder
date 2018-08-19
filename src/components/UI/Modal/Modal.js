import React, { Component } from 'react';
import modalCss from './Modal.css';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show;
    }
    componentWillUpdate(){
        console.log("Modal.componentWillUpdate()");
    }
    render() {
        return (
            <Wrapper>
                <Backdrop show={this.props.show} backdropClicked={this.props.backdropClicked} />
                <div className={modalCss.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Wrapper>
        );
    }
}
export default Modal;