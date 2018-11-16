import { Component, OnInit } from '@angular/core';
import { Tool } from '../model/tool';

const TEMP_TOOLS: Tool[] = [
  {name: 'Microwave', replacements: [], cookingMethods: []}
];

@Component({
  selector: 'app-kitchentools',
  templateUrl: './kitchentools.component.html',
  styleUrls: ['./kitchentools.component.css']
})
export class KitchentoolsComponent implements OnInit {
  displayedColumns: string[] = ['Kitchen Tools'];
  dataSource = TEMP_TOOLS;

  constructor() { }

  ngOnInit() {
  }

}
