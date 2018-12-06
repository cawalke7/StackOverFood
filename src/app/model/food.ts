import { FoodGroup } from './foodgroup';
import { CookingMethod } from './cookingMethod';
import { TEMP_FOOD } from '../testdata/const-food';

/** TODO move food to non-model. */
export class Food {
    id: number;
    name: String;
    cookingMethods: CookingMethod[];
    // bestWith: Food[];
    // replacements: Food[];
    // hazards: String[];
    group: FoodGroup;

    constructor(id: number) {
        this.id = id;
        this.name = TEMP_FOOD[id].name;
        this.cookingMethods = TEMP_FOOD[id].cookingMethods;
        this.group = TEMP_FOOD[id].group;
    }
}
