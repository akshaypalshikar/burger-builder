import React from 'react';
import burgerCss from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={burgerCss.Burger}>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}
export default burger;