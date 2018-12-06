import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tool } from '../model/tool';

export interface ToolData {
  tool: string;
}

const TEMP_TOOLS: Tool[] = [
  {name: 'microwave', replacements: []},
  {name: 'cutting board', replacements: []},
  {name: 'chef knife', replacements: []}
];

@Component({
  selector: 'app-kitchentools-dialog',
  templateUrl: './kitchentools-dialog.component.html',
  styleUrls: ['./kitchentools-dialog.component.css']
})
export class KitchentoolsDialogComponent implements OnInit {
  parent;

  allTools = Object.assign([], TEMP_TOOLS);

  constructor(
    public dialogRef: MatDialogRef<KitchentoolsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToolData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
