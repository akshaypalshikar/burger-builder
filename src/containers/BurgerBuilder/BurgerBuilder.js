import React,{ Component } from 'react';
import Wrapper from './../../hoc/Wrapper';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad:2,
            cheese:1,
            meat:2
        }
    }
    render(){
        return(
                <Wrapper>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls/>
                </Wrapper>
        );
    }
}
export default BurgerBuilder;