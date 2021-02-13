
import { MEALS, CATEGORIES } from '../../data/dummy-data';
import { TOGGLE_FAVORIGE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
    categories: CATEGORIES
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favoriteMeals: updatedFavMeals }
            } else {
                const mealToSafeAsFav = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(mealToSafeAsFav) }


            }
        default:
            return state;
    }
}

export default mealsReducer;