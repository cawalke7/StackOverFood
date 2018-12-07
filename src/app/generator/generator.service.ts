import { Injectable } from '@angular/core';
import { FoodService } from '../foodgroups/food.service';
import { KitchentoolsService } from '../kitchentools/kitchentools.service';
import { CookingMethod } from '../model/cookingMethod';
import { Tool } from '../model/tool';
import { Ingredient } from '../model/ingredient';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  recipeCounter = 0;

  constructor(
    private ingredientService: FoodService,
    private kitchentoolsService: KitchentoolsService
  ) { }

  generate() {
    // console.log('generator button');
    const returnStatement = [];

    const ingts: Ingredient[] = this.ingredientService.getAll();
    const tools: Tool[] = this.kitchentoolsService.getAll();

    // console.log(ingts);
    // console.log(tools);

    // const ref = ingts;
    // console.log(ref);

    // For each ingredient
    for (let i = 0; i < ingts.length; i++) {
      // For each CookingMethod in Food
      for (let cm = 0; cm < ingts[i].food.cookingMethods.length; cm++) {
        if (this.compareCooking(ingts[i].food.cookingMethods[cm], tools)) {
          returnStatement.push(this.printOneRecipe(ingts[i]));
        }
      }
    }
    return returnStatement;
  }

  compareCooking(cooking, tools) {
    if (cooking.tools.length <= 0) {
      return cooking;
    }
    // console.log('Cooking Methods: ', cooking);
    // console.log('Tools (again): ', tools);
    for (let c = 0; c < cooking.tools.length; c++) {
      if (this.hasTool(cooking.tools[c], tools)) {
        // console.log(this.hasTool(cooking.tools[c], tools));
        return cooking;
      }
    }
  }

  // TODO make this more efficient
  private hasTool(needTool: Tool, haveTools: Tool[]) {
    // console.log('Need tool: ', needTool);
    // console.log('Have tools: ', haveTools);
    for (let i = 0; i < haveTools.length; i++) {
      if (haveTools[i].name === needTool.name) {
        return true;
      }
    }
    return false;
  }

  printRecipe(ingredients, cookingMethods) {
    this.recipeCounter++;
    // console.log('printRecipe not implemented');
    console.log('Ingredients: ' + ingredients);
    console.log('Cooking Methods: ' + cookingMethods);
  }

  printOneRecipe(ingredient) {
    const recipe = new Recipe();
    this.recipeCounter++;
    const statement = ingredient.food.cookingMethods[0].operation
                    + ' ' + ingredient.limit
                    + ' ' + ingredient.units
                    + ' ' + ingredient.food.name;
    console.log('Recipe ' + this.recipeCounter + ': ' + statement);

    recipe.name = 'Recipe ' + this.recipeCounter;
    recipe.ingredients = [ingredient];
    recipe.tools = ingredient.food.cookingMethods[0].tools;
    recipe.instructions = ingredient.food.cookingMethods[0];
    recipe.setPhrase();
    return recipe;
  }
}
