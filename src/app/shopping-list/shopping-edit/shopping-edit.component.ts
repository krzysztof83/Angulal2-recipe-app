import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') shopingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editItemIndex = index;
          this.editMode = true;
          this.editItem = this.shoppingListService.getIngredient(index);
          this.shopingListForm.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }


  onClear() {
    this.editMode = false;
    this.shopingListForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}
