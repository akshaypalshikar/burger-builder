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
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState = () => {
        const ingredients = { ...this.state.ingredients };
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey];
            })
            .reduce(
                (sum, element) => {
                    return sum + element;
                }, 0);
        this.setState({ purchasable: sum > 0 })
    }
    updateIngredientState = (type, changeInCount) => {
        const oldCount = this.state.ingredients[type];
        let updatedCount = 0;
        if (oldCount + changeInCount >= 0) {
            updatedCount = oldCount + changeInCount;
        }
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients });
    }
    updatePriceState = (type, changeInCount) => {
        const changeInPrice = INGREDIENT_PRICES[type] * changeInCount;
        const oldPrice = this.state.totalPrice;
        let updatedPrice = 0;
        if (oldPrice + changeInPrice >= 0) {
            updatedPrice = oldPrice + changeInPrice;
        }
        this.setState({ totalPrice: updatedPrice });
    }
    addIngredient = (type) => {
        this.updateIngredientState(type, 1);
    }
    addPrice = (type) => {
        this.updatePriceState(type, 1);
    }
    addIngredientHandler = (type) => {
        this.addIngredient(type);
        this.addPrice(type);
    }
    removeIngredient = (type) => {
        this.updateIngredientState(type, -1);
    }
    removePrice = (type) => {
        this.updatePriceState(type, -1);
    }
    removeIngredientHandler = (type) => {
        this.removeIngredient(type);
        this.removePrice(type);
    }
    render() {
        const disableInfo = { ...this.state.ingredients };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    disable={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.updatePurchaseState} />
            </Wrapper>
        );
    }
}
export default BurgerBuilder;