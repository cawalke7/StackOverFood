import { Component, OnInit, Inject } from '@angular/core';
import { Tool } from '../model/tool';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { KitchentoolsDialogComponent } from '../kitchentools-dialog/kitchentools-dialog.component';

export interface ToolData {
  tool: string;
}

const TEMP_TOOLS: Tool[] = [
  {name: 'microwave', replacements: [], cookingMethods: []},
  {name: 'cutting board', replacements: [], cookingMethods: []},
  {name: 'chef knife', replacements: [], cookingMethods: []}
];

@Component({
  selector: 'app-kitchentools',
  templateUrl: './kitchentools.component.html',
  styleUrls: ['./kitchentools.component.css'],
})
export class KitchentoolsComponent implements OnInit {
  displayedColumns: string[] = ['Kitchen Tools'];
  dataSource = TEMP_TOOLS;
  tool: Tool = TEMP_TOOLS[0];
  allTools = TEMP_TOOLS;

  newtool: Tool = {name: '', replacements: [], cookingMethods: []};

  add(name) {
    this.newtool.name = name;
    this.dataSource.push(this.newtool);
    this.newtool = {name: '', replacements: [], cookingMethods: []};
  }

  remove(index) {
    this.dataSource.splice(index, 1);
  }

  constructor(public dialog: MatDialog) {}

   openDialog(): void {
    const dialogRef = this.dialog.open(KitchentoolsDialogComponent, {
      width: '250px',
      data: {tool: this.tool}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.tool = result;
    });
  }

  ngOnInit() {
  }

}
