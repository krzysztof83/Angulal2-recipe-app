import {Effect, Actions, ofType} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import * as RecipeActions from '../store/recipe.actions';
import {Recipe} from '../recipe.model';
// import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$.pipe(
    ofType(RecipeActions.FETCH_RECIPES))
    .switchMap((action: RecipeActions.FetchRecipe) => {
      return this.httpClient.get<Recipe[]>('https://angular-recipe-book-kcz.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map(
      (recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    );

  constructor(private actions$: Actions, private httpClient: HttpClient) {
  }
}
