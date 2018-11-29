import { Component, OnInit, Inject } from '@angular/core';
// import { FoodGroup } from '../model/foodgroup';
import { Ingredient } from '../model/ingredient';
import { Food } from '../model/food';
import { FOOD_GROUP } from '../testdata/const-foodgroups';
import { TEMP_FOOD } from '../testdata/const-food';
import { MatDialog } from '@angular/material';
import { FoodDialogComponent } from '../food-dialog/food-dialog.component';

export interface FoodData {
  ingredient: Food;
}

const TEMP_INGREDIENT: Ingredient[] = [
  {id: 0, limit: 1, units: '', food: new Food(0)},
  {id: 1, limit: 1, units: '', food: new Food(1)},
  {id: 2, limit: 1, units: '', food: new Food(2)}
];

@Component({
  selector: 'app-foodgroups',
  templateUrl: './foodgroups.component.html',
  styleUrls: ['./foodgroups.component.css']
})
export class FoodgroupsComponent implements OnInit {
  foodgroups = FOOD_GROUP;
  // otherFood = Object.assign([], TEMP_INGREDIENT);

  dataSource = [];
  newfood: Ingredient = {id: 0, limit: 0, units: '', food: new Food(0)};

  add(name) {
    // TODO search for tool properly (by name)
    this.newfood.food.name = name;
    this.dataSource.push(this.newfood);
    this.newfood = {id: 0, limit: 0, units: '', food: new Food(0)};
  }

  addAll(id, amount, units) {
    // TODO search for tool properly (by name)
    this.newfood.id = id;
    this.newfood.limit = 0;
    this.newfood.units = '';
    this.newfood.food = new Food(id);
    this.dataSource.push(this.newfood);
    this.newfood = {id: 0, limit: 0, units: '', food: new Food(0)};
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
        this.addAll(result, 0, '');
      }
    });
  }

  ngOnInit() {
  }

}
