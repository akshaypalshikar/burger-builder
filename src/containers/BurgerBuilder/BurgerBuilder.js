import React,{ Component } from 'react';
import Wrapper from './../../hoc/Wrapper';
import Burger from './../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad:3,
            cheese:2,
            meat:1
        }
    }
    render(){
        return(
                <Wrapper>
                    <Burger ingredients={this.state.ingredients}/>
                    <div>Build Controls</div>
                </Wrapper>
        );
    }
}
export default BurgerBuilder;