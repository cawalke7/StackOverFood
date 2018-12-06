import { Food } from '../model/food';
import { CookingMethod } from '../model/cookingMethod';
import { Tool } from '../model/tool';

export const TEMP_FOOD: Food[] = [
    {id: 0, name: '', group: {name: ''},
        cookingMethods: [
        ]},
    {id: 1, name: 'apple', group: {name: 'Fruits'},
        cookingMethods: [
            new CookingMethod('Eat whole', 0, 0, [], null)
        ]},
    {id: 2, name: 'bread', group: {name: 'Grains'},
        cookingMethods: [
            new CookingMethod('Eat as much as you\'d like', 0, 0, [], null)
        ]},
    {id: 3, name: 'carrot', group: {name: 'Vegetables'},
        cookingMethods: [
            new CookingMethod('Eat whole', 0, 0, [], null)
        ]},
    {id: 4, name: 'potato', group: {name: 'Vegetables'},
        cookingMethods: [
            new CookingMethod('Microwave', 0, 0, [new Tool('microwave')], null)
        ]}
  ];
