import { Component, OnInit, Inject } from '@angular/core';
// import { FoodGroup } from '../model/foodgroup';
import { Ingredient } from '../model/ingredient';
import { Food } from '../model/food';
import { FOOD_GROUP } from './const-foodgroups';
import { MatDialog } from '@angular/material';
import { FoodDialogComponent } from '../food-dialog/food-dialog.component';

export interface FoodData {
  ingredient: Food;
}

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
  otherFood = Object.assign([], TEMP_FOOD);

  dataSource = Object.assign([], TEMP_FOOD);
  newfood: Ingredient = {id: 0, limit: 0, food: {id: 0, name: '', group: {name: ''}}};

  add(name) {
    // TODO search for tool properly (by name)
    this.newfood.food.name = name;
    this.dataSource.push(this.newfood);
    this.newfood = {id: 0, limit: 0, food: {id: 0, name: '', group: {name: ''}}};
  }

  remove(index) {
    this.dataSource.splice(index, 1);
  }

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(FoodDialogComponent, {
      width: '250px',
      data: {food: this.newfood}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed -- ' + result);
      if (result) {
        this.add(result);
      }
    });
  }

  ngOnInit() {
  }

}
