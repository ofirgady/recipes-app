import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { ingredient } from './../../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'this is simply a test',
      'https://www.saveur.com/uploads/2022/04/30/47_Zaba_9780805243390_art_r1-scaled.jpg?auto=webp&width=1440&height=960.1875',
      [
        new ingredient('Meat', 1),
        new ingredient('French Fries', 20)
      ]),
    new Recipe('A different test recipe', 'this is simply a test',
      'https://www.saveur.com/uploads/2022/04/30/47_Zaba_9780805243390_art_r1-scaled.jpg?auto=webp&width=1440&height=960.1875',
      [
        new ingredient('Buns', 2),
        new ingredient('Burger', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index , 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}