import { FoodGroup } from './foodgroup';
import { CookingMethod } from './cookingMethod';

/** TODO move food to non-model. */
export class Food {
    id: number;
    cookingMethods: CookingMethod[];
    bestWith: Food[];
    replacements: Food[];
    hazards: String[];
    group: FoodGroup;
}
