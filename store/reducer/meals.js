
import { MEALS, CATEGORIES } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
    categories: CATEGORIES
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favoriteMeals: updatedFavMeals }
            } else {
                const mealToSafeAsFav = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(mealToSafeAsFav) }
            }
        case SET_FILTERS:
            const filters = action.filters;
            console.log(state.meals.length, 'start');
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (filters.lactoseFree && !meal.isLactoseFree) {
                    return false
                };
                if (filters.glutenFree && !meal.isGlutenFree) {
                    return false
                };
                if (filters.veganFree && !meal.isVegan) {
                    return false
                };
                if (filters.vegetarianFree && !meal.isVegetarian) {
                    return false
                };
                return true;
            })
            console.log(updatedFilteredMeals.length, 'fltered');
            return { ...state, filteredMeals: updatedFilteredMeals }
        default:
            return state;
    }
}



export default mealsReducer;