import React, { Component } from 'react';
import Wrapper from './../../hoc/Wrapper';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            cheese: 1,
            meat: 2
        },
        totalPrice: 4
    }
    updateIngredient = (type, changeInCount) => {
        const oldCount = this.state.ingredients[type];
        let updatedCount = 0;
        if (oldCount + changeInCount >= 0) {
            updatedCount = oldCount + changeInCount;
        }
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients });
    }
    updatePrice = (type, changeInCount) => {
        const changeInPrice = INGREDIENT_PRICES[type] * changeInCount;
        const oldPrice = this.state.totalPrice;
        let updatedPrice = 0;
        if (oldPrice + changeInPrice >= 0) {
            updatedPrice = oldPrice + changeInPrice;
        }
        this.setState({ totalPrice: updatedPrice });
    }
    addIngredient = (type) => {
        this.updateIngredient(type, 1);
    }
    addPrice = (type) => {
        this.updatePrice(type, 1);
    }
    addIngredientHandler = (type) => {
        this.addIngredient(type);
        this.addPrice(type);
    }
    removeIngredient = (type) => {
        this.updateIngredient(type, -1);
    }
    removePrice = (type) => {
        this.updatePrice(type, -1);
    }
    removeIngredientHandler = (type) => {
        this.removeIngredient(type);
        this.removePrice(type);
    }
    render() {
        const disableInfo = { ...this.state.ingredients };
        for (let key in disableInfo) {
            disableInfo[key] =disableInfo[key]<=0;
        }
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                add={this.addIngredientHandler} 
                remove={this.removeIngredientHandler} 
                disable={disableInfo} />
            </Wrapper>
        );
    }
}
export default BurgerBuilder;