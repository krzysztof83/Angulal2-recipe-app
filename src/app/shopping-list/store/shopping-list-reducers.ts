import {Action} from '@ngrx/store';
import {Ingredient} from '../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

const initialState = {
  ingredients: [
    new Ingredient('Apple', '5'),
    new Ingredient('Tomatoes', '10')
  ]
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action]
      }
  }
  return state;
}
