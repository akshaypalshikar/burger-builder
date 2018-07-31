import React from 'react';
import burgerCss from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey=>{
        return [...Array(props.ingredients[ingredientKey])]
                    .map((_,index)=>{
                       return <BurgerIngredient key={ingredientKey+index} type={ingredientKey}/>;
                    });
    });
    return (
        <div className={burgerCss.Burger}>
            {<BurgerIngredient type='bread-top' />}
                {transformedIngredients}
            {<BurgerIngredient type='bread-bottom' />}
        </div>
    );
}
export default burger;