import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: Http, private recipeService: RecipeService, private authService: AuthService) {
  }

  private _url_recipes = 'https://angular-recipe-book-kcz.firebaseio.com/recipes.json';

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put(this._url_recipes + '?auth=' + token , this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get(this._url_recipes + '?auth=' + token)
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
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
