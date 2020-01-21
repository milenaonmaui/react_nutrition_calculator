import React from 'react'
import {connect} from 'react-redux'
import {fetchIngredients} from '../actions/fetchIngredients.js'
import IngredientsList from '../components/IngredientsList.js'
import IngredientInput from '../components/IngredientInput.js'
import IngredientSearch from '../components/IngredientSearch.js'

class IngredientsContainer extends React.Component {
    componentDidMount(){
        this.props.fetchIngredients()        
    }

    render(){
        console.log("Ingredients container props:", this.props)
        let meal = this.props.meal;
        let ingredients;
        if (meal === undefined) {
            meal = {
                id: null,               
            }
            ingredients = this.props.ingredients
        } else {
            ingredients =meal.ingredients
        }
       
        return (
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                    <h5>Search Ingredients </h5>
                    <IngredientsList ingredients={ingredients} meal_id = {meal.id} action={"Delete"}/>
                </div>
                <div className="col-sm-6">
                    <IngredientSearch meal_id = {meal.id}/>
                    <IngredientInput meal={meal}/> 
                </div>
              </div>               
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}
export default connect(mapStateToProps, {fetchIngredients})(IngredientsContainer);