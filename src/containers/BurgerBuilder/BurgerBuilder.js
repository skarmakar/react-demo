import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.3,
	meat: 1.5,
	cheese: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
				totalPrice: 4,
				purchable: false,
        purchasing: false
    };

    addIngredientHandler = (type) => {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] + 1;
				let newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ ingredients: updatedIngredients, totalPrice: newTotalPrice});
				this.updatePurchableState(updatedIngredients);
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
				this.updatePurchableState(updatedIngredients);
    }

		updatePurchableState (ingredients) {
			let ingredientCount = Object.values(ingredients).reduce((sum, x) => {return sum + x});
			this.setState({purchable: ingredientCount > 0});
		}

    purchaseHandler = () => {
      this.setState({ purchasing: true });
    }

    render(){
				const disabledInfo = {...this.state.ingredients};
				for(let key in disabledInfo){
					disabledInfo[key] = disabledInfo[key] === 0;
				}

        return (
            <Aux>
								<Modal show={this.state.purchasing}>
                  <OrderSummary ingredients={this.state.ingredients} />
                </Modal>

                <BuildControls 
									ingredientAdded={this.addIngredientHandler} 
									ingredientRemoved={this.removeIngredientHandler}
									disabledInfo={disabledInfo}
									purchable={this.state.purchable}
									totalPrice={this.state.totalPrice}
                  ordered={this.purchaseHandler}
                  />
                <Burger ingredients={this.state.ingredients} />
            </Aux>
        )
    }
}

export default BurgerBuilder;