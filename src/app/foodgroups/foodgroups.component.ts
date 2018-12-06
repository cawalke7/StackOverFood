import { Component, OnInit, Inject } from '@angular/core';
// import { FoodGroup } from '../model/foodgroup';
import { Ingredient } from '../model/ingredient';
import { Food } from '../model/food';
import { FOOD_GROUP } from '../testdata/const-foodgroups';
import { TEMP_FOOD } from '../testdata/const-food';
import { MatDialog } from '@angular/material';
import { FoodDialogComponent } from '../food-dialog/food-dialog.component';
import { FoodService } from './food.service';

export interface FoodData {
  ingredient: Food;
}

const TEMP_INGREDIENT: Ingredient[] = [
  {id: 4, limit: 1, units: '', food: new Food(4)},
  {id: 1, limit: 1, units: '', food: new Food(1)},
  {id: 2, limit: 1, units: '', food: new Food(2)},
  {id: 3, limit: 1, units: '', food: new Food(3)}
];

@Component({
  selector: 'app-foodgroups',
  templateUrl: './foodgroups.component.html',
  styleUrls: ['./foodgroups.component.css']
})
export class FoodgroupsComponent implements OnInit {
  foodgroups = FOOD_GROUP;
  dataSource = Object.assign([], TEMP_INGREDIENT);
  // dataSource = [];
  newfood: Ingredient = {id: 0, limit: 0, units: '', food: new Food(0)};

  // add(name) {
  //   // TODO search for tool properly (by name)
  //   this.newfood.food.name = name;
  //   this.dataSource.push(this.newfood);
  //   this.newfood = {id: 0, limit: 0, units: '', food: new Food(0)};
  // }

  addAll(id, amount, units) {
    // TODO search for tool properly (by name)
    // this.newfood.id = id;
    // this.newfood.limit = amount;
    // this.newfood.units = units;
    // this.newfood.food = new Food(id);
    // this.dataSource.push(this.newfood);
    // console.log(this.newfood.food.cookingMethods[0]); // Prepare for recipe generating
    // this.newfood = {id: 0, limit: 0, units: '', food: new Food(0)};
    this.service.add(id, amount, units);
    this.dataSource = this.service.getAll();
  }

  remove(index) {
    // this.dataSource.splice(index, 1);
    this.service.remove(index);
    this.dataSource = this.service.getAll();
  }

  constructor(public dialog: MatDialog, private service: FoodService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(FoodDialogComponent, {
      width: '250px',
      data: {food: this.newfood}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addAll(result[0], result[1], result[2]);
      }
    });
  }

  ngOnInit() {
  }

}
