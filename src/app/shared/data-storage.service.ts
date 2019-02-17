import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {
  }

  private _url_recipes = 'https://angular-recipe-book-kcz.firebaseio.com/recipes.json';

  storeRecipes() {
    // return this.httpClient.put(this._url_recipes, this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   // headers: new HttpHeaders()
    //   params: new HttpParams().set('auth', token)
    // });
    const req = new HttpRequest('PUT', this._url_recipes,
      this.recipeService.getRecipes(),
      {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>(this._url_recipes + '?auth=' + token)
    this.httpClient.get<Recipe[]>(this._url_recipes)
      .pipe(map(
        (recipes) => {
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
