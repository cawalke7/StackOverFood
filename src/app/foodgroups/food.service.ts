import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import { Food } from '../model/food';

const TEMP_INGREDIENT: Ingredient[] = [
  {id: 4, limit: 2, units: 'servings', food: new Food(4)},
  {id: 1, limit: 2, units: 'servings', food: new Food(1)},
  {id: 2, limit: 2, units: 'servings', food: new Food(2)},
  {id: 3, limit: 2, units: 'servings', food: new Food(3)}
];

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  dataSource = Object.assign([], TEMP_INGREDIENT);
  // dataSource = [];
  newfood: Ingredient = {id: 0, limit: 0, units: '', food: new Food(0)};

  testTrigger(test: any) {
    console.log('Food Service Works! ' + test);
  }

  getAll(): Ingredient[] {
    return Array.from(this.dataSource);
  }

  add(id, amount, units) {
    // TODO search for tool properly (by name)
    this.newfood.id = id;
    this.newfood.limit = amount;
    this.newfood.units = units;
    this.newfood.food = new Food(id);
    this.dataSource.push(this.newfood);
    console.log(this.newfood.food.cookingMethods[0]); // Prepare for recipe generating
    this.newfood = {id: 0, limit: 0, units: '', food: new Food(0)};
  }

  remove(index) {
    this.dataSource.splice(index, 1);
  }

  constructor() { }
}
