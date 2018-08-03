import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from './../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
        return <li key={ingredientKey}>
            <span style={{ textTransform: 'capitalize' }}>{ingredientKey}:
                {props.ingredients[ingredientKey]}</span></li>;
    });
    return (
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout...</p>
            <Button buttonType='Danger' clicked={props.buttonCancelClicked} >CANCEL</Button>
            <Button buttonType='Success' clicked={props.buttonContinueClicked} >CONTINUE</Button>
        </Wrapper>
    );
};

export default orderSummary;