import { Component, OnInit } from '@angular/core';
// import { FoodGroup } from '../model/foodgroup';
import { Ingredient } from '../model/ingredient';
import { Food } from '../model/food';
import { FOOD_GROUP } from './const-foodgroups';

const TEMP_FOOD: Ingredient[] = [
  {id: 1, limit: 1, food: {id: 1, name: 'apple', group: {name: 'Fruits'}}},
  {id: 2, limit: 1, food: {id: 2, name: 'bread', group: {name: 'Grains'}}},
  {id: 3, limit: 1, food: {id: 3, name: 'carrot', group: {name: 'Vegetables'}}}
];

@Component({
  selector: 'app-foodgroups',
  templateUrl: './foodgroups.component.html',
  styleUrls: ['./foodgroups.component.css']
})
export class FoodgroupsComponent implements OnInit {
  foodgroups = FOOD_GROUP;

  displayedColumns: string[] = ['Ingredient List'];
  dataSource = TEMP_FOOD;

  constructor() { }

  ngOnInit() {
  }

}
