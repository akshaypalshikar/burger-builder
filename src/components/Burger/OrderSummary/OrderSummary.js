import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from './../../UI/Button/Button';

class OrderSummary extends Component {
    //TODO this can be a functional component
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingredientKey => {
            return <li key={ingredientKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingredientKey}:
                {this.props.ingredients[ingredientKey]}</span></li>;
        });
        return (
            <Wrapper>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout...</p>
                <Button buttonType='Danger' clicked={this.props.buttonCancelClicked} >CANCEL</Button>
                <Button buttonType='Success' clicked={this.props.buttonContinueClicked} >CONTINUE</Button>
            </Wrapper>
        );
    }
};

export default OrderSummary;