import { Ingredient } from './ingredient';
import { Tool } from './tool';
import { CookingMethod } from './cookingMethod';

export class Recipe {
    ingredients: Ingredient[];
    tools: Tool[];
    instructions: CookingMethod[];
}
