import React from 'react';
import burgerCss from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey=>{
        return [...Array(props.ingredients[ingredientKey])]
                    .map((_,index)=>{
                       return <BurgerIngredient key={ingredientKey+index} type={ingredientKey}/>;
                    });
    }).reduce((arr,element)=>arr.concat(element),[]);
    console.log('transformedIngredients : ',transformedIngredients);
    if(transformedIngredients.length===0){
        transformedIngredients = <p>Please start adding ingredients.</p>;
    }
    return (
        <div className={burgerCss.Burger}>
            {<BurgerIngredient type='bread-top' />}
                {transformedIngredients}
            {<BurgerIngredient type='bread-bottom' />}
        </div>
    );
}
export default burger;