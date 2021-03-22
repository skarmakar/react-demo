import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 1,
	bacon: 2,
	meat: 3,
	cheese: 1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
				totalPrice: 4
    };

    addIngredientHandler = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] + 1;
				let newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ ingredients: updatedIngredients, totalPrice: newTotalPrice});
    }
    
    removeIngredientHandler = (type) => {
        const prevInredientCount = this.state.ingredients[type];
        
        if(prevInredientCount == 0){
            return;
        }

        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = prevInredientCount - 1;
				let newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ ingredients: updatedIngredients, totalPrice: newTotalPrice });
    }

    render(){
				const disabledInfo = {...this.state.ingredients};
				for(let key in disabledInfo){
					disabledInfo[key] = disabledInfo[key] === 0;
				}

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
									ingredientAdded={this.addIngredientHandler} 
									ingredientRemoved={this.removeIngredientHandler}
									disabledInfo={disabledInfo} />
            </Aux>
        )
    }
}

export default BurgerBuilder;