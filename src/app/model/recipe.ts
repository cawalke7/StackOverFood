import { Ingredient } from './ingredient';
import { Tool } from './tool';
import { CookingMethod } from './cookingMethod';

export class Recipe {
    name: String;
    ingredients: Ingredient[];
    tools: Tool[];
    instructions: CookingMethod;
    phrase: String;

    constructor() {
        this.name = '';
        this.ingredients = [];
        this.tools = [];
        this.instructions = null;
        this.phrase = '';
    }

    setPhrase() {
        if (this.ingredients.length === 1) {
            this.phrase = this.ingredients[0].food.cookingMethods[0].operation
            + ' ' + this.ingredients[0].limit
            + ' ' + this.ingredients[0].units
            + ' ' + this.ingredients[0].food.name;
        }
    }
}
