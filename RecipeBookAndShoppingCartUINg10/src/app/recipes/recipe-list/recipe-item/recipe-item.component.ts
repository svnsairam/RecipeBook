import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  @Input("recipeItem") recipe:Recipe;
  constructor() { }

  ngOnInit() {
  }
  showRecipeDetails(){
    this.recipeItemSelected.emit(this.recipe);
  }
}
