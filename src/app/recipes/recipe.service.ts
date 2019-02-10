import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanges = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
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
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShopingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanges.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanges.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanges.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanges.next(this.recipes.slice());
  }
}
