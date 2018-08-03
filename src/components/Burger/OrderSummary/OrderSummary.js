import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey=>{
        return <li key={ingredientKey}>
                <span style={{textTransform:'capitalize'}}>{ingredientKey}: 
                {props.ingredients[ingredientKey]}</span></li>;
    });
    return(
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout...</p>
        </Wrapper>
    );
};

export default orderSummary;