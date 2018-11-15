import { Component, OnInit } from '@angular/core';
// import { FoodGroup } from '../model/foodgroup';
import { FOOD_GROUP } from '../const-foodgroups';

@Component({
  selector: 'app-foodgroups',
  templateUrl: './foodgroups.component.html',
  styleUrls: ['./foodgroups.component.css']
})
export class FoodgroupsComponent implements OnInit {
  foodgroups = FOOD_GROUP;

  constructor() { }

  ngOnInit() {
  }

}
