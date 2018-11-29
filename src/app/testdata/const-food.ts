import { Food } from '../model/food';
import { CookingMethod } from '../model/cookingMethod';

export const TEMP_FOOD: Food[] = [
    {id: 0, name: '', group: {name: ''},
        cookingMethods: [
        ]},
    {id: 1, name: 'apple', group: {name: 'Fruits'},
        cookingMethods: [
            new CookingMethod('Eat whole.')
        ]},
    {id: 2, name: 'bread', group: {name: 'Grains'},
        cookingMethods: [
            new CookingMethod('Eat as much as you\'d like.')
        ]},
    {id: 3, name: 'carrot', group: {name: 'Vegetables'},
        cookingMethods: [
            new CookingMethod('Eat whole.')
        ]},
  ];
