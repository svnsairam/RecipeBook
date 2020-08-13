import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") ingredientName : ElementRef;
  @ViewChild("amountInput") ingredientAmount : ElementRef;
  @Output() ingredientWasAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addItem(){
    var ingredient:Ingredient = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value.valueOf());
    this.ingredientWasAdded.emit(ingredient);
  }
}
