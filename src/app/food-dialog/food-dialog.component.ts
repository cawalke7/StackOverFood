import { Component, OnInit, Inject } from '@angular/core';
import { Food } from '../model/food';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TEMP_FOOD } from '../testdata/const-food';
// import { ALLOWED_UNITS } from '../testdata/const-units';

export const ALLOWED_UNITS: String[] = [
  'servings',
  'grams (g)'
];

export interface FoodData {
  id: number;
  amount: number;
  units: String;
}

@Component({
  selector: 'app-food-dialog',
  templateUrl: './food-dialog.component.html',
  styleUrls: ['./food-dialog.component.css']
})
export class FoodDialogComponent implements OnInit {
  allFood = Object.assign([], TEMP_FOOD);
  units = Object.assign([], ALLOWED_UNITS);

  constructor(
    public dialogRef: MatDialogRef<FoodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FoodData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
