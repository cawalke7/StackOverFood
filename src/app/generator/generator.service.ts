import { Injectable } from '@angular/core';
import { FoodService } from '../foodgroups/food.service';
import { KitchentoolsService } from '../kitchentools/kitchentools.service';
import { CookingMethod } from '../model/cookingMethod';
import { Tool } from '../model/tool';
import { Ingredient } from '../model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(
    private ingredientService: FoodService,
    private kitchentoolsService: KitchentoolsService
  ) { }

  generate() {
    console.log('generator button');
    // console.log(this.ingredientService.getAll());

    // TODO - Algorithm
    // Choose first food
    const ingts: Ingredient[] = Array.from(this.ingredientService.getAll());
    // Choose first tool
    const tools = Array.from(this.kitchentoolsService.getAll());
    // Object.assign([], this.kitchentoolsService.getAll());
    // Choose first cooking method
    console.log(ingts);
    console.log(tools);

    const ref = ingts;
    console.log(ref);
  }

  compareCooking(cooking, tools) {
    console.log('Cooking Methods: ' + cooking);
    console.log('Tools (again): ' + tools);
  }

  // TODO make this more efficient
  private hasTool(needTool: Tool, haveTools: Tool[]) {
    for (let i = 0; i < haveTools.length; i++) {
      if (haveTools[i].name === needTool.name) {
        return true;
      }
    }
    return false;
  }

  printRecipe(ingredients, cookingMethods) {
    // console.log('printRecipe not implemented');
    console.log('Ingredients: ' + ingredients);
    console.log('Cooking Methods: ' + cookingMethods);
  }

  printOneRecipe(ingredient) {
    const statement = ingredient.food.cookingMethod[0];
    console.log(statement);
  }
}
