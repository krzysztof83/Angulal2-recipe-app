import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

export interface FeatureState {
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

export function recipeReducer(state = initialState, action) {
  return state;
}
