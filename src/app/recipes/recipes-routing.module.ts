import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {GuardService} from '../auth/guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RouterModule} from '@angular/router';

const recipesRoutes = [
  {path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent},
      { path: 'new', component: RecipeEditComponent, canActivate: [GuardService] },
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [GuardService] },
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
