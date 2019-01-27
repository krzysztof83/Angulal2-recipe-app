import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('jajecznica', 'robi sie z jaj', 'https://upload.wikimedia.org/wikipedia/commons/1/10/Jajecznica_z_kurkami.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecepieSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
