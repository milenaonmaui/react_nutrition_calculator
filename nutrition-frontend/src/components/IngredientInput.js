import React from 'react'
import {connect} from 'react-redux'
import {addIngredient} from '../actions/addIngredient.js'

class IngredientInput extends React.Component {
    state = {name: "", measure: "1 cup", kcal: "", servings: ""}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addIngredient(this.state, this.props.meal.id)
        this.setState({
            name: "", 
            measure: "1 cup",
            kcal: "0",
            fats: "0",
            carbs: "0",
            sugars: "0",
            fiber: "0",
            protein: "0",
            servings: "1"
        })
    }

    
    render(){
        
        let mealId= this.props.meal.id
        
        return(
            <div className="card" >
              <div className="card-body">
                <p className="card-title"><b>Create new ingredient:</b></p>
                <form onSubmit = {this.handleSubmit}>
                
                    <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Name:</label>
                        <input type="text" id ="name" name="name" required value={this.state.name} onChange={this.handleChange}/>
                   </div>
                   <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Calories:</label>
                        <input type="number" name="kcal" value={this.state.kcal} onChange={this.handleChange}/>
                   </div>
                   <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Fats, g:</label>
                        <input type="number" name="fats" value={this.state.fats} onChange={this.handleChange}/>
                   </div>
                   <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Carbs, g:</label>
                        <input type="number" name="carbs" value={this.state.carbs} onChange={this.handleChange}/>
                   </div>
                   <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Sugars, g:</label>
                        <input type="number" name="sugars" value={this.state.sugars} onChange={this.handleChange}/>
                   </div>
                   <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Fiber, g:</label>
                        <input type="number" name="fiber" value={this.state.fiber} onChange={this.handleChange}/>
                   </div>
                   <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Protein, g:</label>
                        <input type="number" name="protein" value={this.state.protein} onChange={this.handleChange}/>
                   </div>
                   <div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Measure:</label>
                        <select name="measure" value={this.state.measure} onChange={this.handleChange}>
                            <option>1 cup</option>
                            <option>1 tbs</option>
                            <option>1 oz</option>
                            <option>1 count</option>
                        </select>
                    </div>
                    
                    {mealId &&<div className="form-group-row">
                        <label className="col-sm-4 col-form-label">Servings:</label>
                        <input type="number" name="servings" value={this.state.servings} step = ".01" onChange={this.handleChange}/>
                    </div>}
                           
                    <input type="submit" value="Save"/>
               
                </form>
            
              </div>
            </div>
        )
    }
}

export default connect(null, {addIngredient})(IngredientInput)