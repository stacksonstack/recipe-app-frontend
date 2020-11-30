import React, {Component} from 'react'
import MealPreview from '../Components/MealPreview'

class AllMealsContainer extends Component{
    
    renderMealPreview=()=>{
    return this.props.meals.map((meal) => < MealPreview key={meal.id} meal={meal} mealClicked={this.props.mealClicked}/>)
    }
    render(){
        return(
            <div>
                {this.renderMealPreview()}
            </div>
        )
    }
}


export default AllMealsContainer;