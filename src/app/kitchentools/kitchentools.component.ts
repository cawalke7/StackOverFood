import { Component, OnInit, Inject } from '@angular/core';
import { Tool } from '../model/tool';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { KitchentoolsDialogComponent } from '../kitchentools-dialog/kitchentools-dialog.component';
import { KitchentoolsService } from './kitchentools.service';

export interface ToolData {
  tool: string;
}

const TEMP_TOOLS: Tool[] = [
  // {name: 'microwave', replacements: []},
  // {name: 'cutting board', replacements: []},
  // {name: 'chef knife', replacements: []}
  new Tool('microwave'),
  new Tool('cutting board'),
  new Tool('chef knife')
];

@Component({
  selector: 'app-kitchentools',
  templateUrl: './kitchentools.component.html',
  styleUrls: ['./kitchentools.component.css'],
})
export class KitchentoolsComponent implements OnInit {
  // displayedColumns: string[] = ['Kitchen Tools'];
  allTools = Object.assign([], TEMP_TOOLS);
  // dataSource = Object.assign([], TEMP_TOOLS); // For testing
  dataSource = [];

  newtool = new Tool('');

  add(name) {
    // TODO search for tool properly (by name)
    // this.newtool.name = name;
    // this.dataSource.push(this.newtool);
    // this.newtool = {name: '', replacements: [], cookingMethods: []};
    this.service.add(name);
    this.dataSource = this.service.getAll();
  }

  remove(index) {
    // this.dataSource.splice(index, 1);
    this.service.remove(index);
    this.dataSource = this.service.getAll();
  }

  constructor(public dialog: MatDialog, private service: KitchentoolsService) {}

   openDialog(): void {
    const dialogRef = this.dialog.open(KitchentoolsDialogComponent, {
      width: '250px',
      data: {tool: this.newtool}
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
