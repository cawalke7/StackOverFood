import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ToolData {
  tool: string;
}

@Component({
  selector: 'app-kitchentools-dialog',
  templateUrl: './kitchentools-dialog.component.html',
  styleUrls: ['./kitchentools-dialog.component.css']
})
export class KitchentoolsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<KitchentoolsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToolData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
