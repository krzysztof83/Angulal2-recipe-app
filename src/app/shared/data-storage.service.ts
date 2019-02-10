import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: Http, private recipeService: RecipeService) {
  }

  private _url_recipes = 'https://angular-recipe-book-kcz.firebaseio.com/recipes.json';

  storeRecipes() {
    return this.httpClient.put(this._url_recipes, this.recipeService.getRecipes());
  }

  getRecipes() {
    this.httpClient.get(this._url_recipes)
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
