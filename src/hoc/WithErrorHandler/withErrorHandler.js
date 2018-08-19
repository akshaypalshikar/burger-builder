import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            this.responseInterceptor = axios.interceptors.response.use(responseConfig => responseConfig, error => {
                this.setState({ error: error });

            });
            this.requestInterceptor = axios.interceptors.request.use(requestConfig => {
                this.setState({ error: null });
                return requestConfig;
            });
        }
        componentWillUnmount(){
            console.log('withErrorHandler.componentWillUnmount()',this.requestInterceptor,this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <Wrapper>
                    <Modal show={this.state.error}
                        backdropClicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Wrapper>
            );
        }
    }
}

export default withErrorHandler;