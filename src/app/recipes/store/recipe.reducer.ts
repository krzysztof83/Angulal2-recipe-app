import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe('jajecznica',
      'robi sie z jaj',
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Jajecznica_z_kurkami.jpg',
      [
        new Ingredient('jaja', '2'),
        new Ingredient('sol', '3'),
        new Ingredient('pomidorki', '6')
      ]),
    new Recipe('Inna Jajecznica',
      'niespodziewanie tez z jaj',
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Jajecznica_z_kurkami.jpg',
      [
        new Ingredient('jaja', '4'),
        new Ingredient('sol', '1')
      ])
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
