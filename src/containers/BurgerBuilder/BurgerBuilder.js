import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
}


class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            });
    }

    purchasingStateHandler = () => {
        this.setState({ purchasing: true });
    }

    purchasingCancelledStateHandler = () => {
        this.setState({ purchasing: false });
    }

    setLoading = () => {
        this.setState({ loading: true });
    }

    notLoadingAndNotPurchasing = () => {
        this.setState({ loading: false, purchasing: false });
    }

    purchasingContinueStateHandler = () => {
        this.setLoading();
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice, //TODO real app calculates price on server using ingredients
            customer: {
                name: 'Akshay',
                email: 'abc@test.co',
                address: {
                    street: '123 Test st',
                    city: 'testingville',
                    state: 'quality state',
                    zipcode: 12345
                }
            }

        }
        setTimeout(() => axios.post('/orders.json', order)
            .then(response => {
                this.notLoadingAndNotPurchasing();
                console.log(response);
            })
            .catch(error => {
                this.notLoadingAndNotPurchasing();
                console.log(error);
            }), 200);
    }

    updatePurchaseState = (ingredients) => {
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
        this.updatePurchaseState(updatedIngredients);
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
        let orderSummary = null;
        let burger = <Spinner />
        if (this.state.ingredients) {
            burger =
                <Wrapper>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        add={this.addIngredientHandler}
                        remove={this.removeIngredientHandler}
                        disable={disableInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        purchasing={this.purchasingStateHandler} />
                </Wrapper>;
            orderSummary =
                <OrderSummary ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    buttonContinueClicked={this.purchasingContinueStateHandler}
                    buttonCancelClicked={this.purchasingCancelledStateHandler} />;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Wrapper>
                <Modal show={this.state.purchasing}
                    backdropClicked={this.purchasingCancelledStateHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Wrapper>
        );
    }
}
export default withErrorHandler(BurgerBuilder, axios);