import { Injectable } from '@angular/core';
import { Tool } from '../model/tool';
import { TEMP_TOOLS } from '../testdata/const-tools';

@Injectable({
  providedIn: 'root'
})
export class KitchentoolsService {
  // dataSource = Object.assign([], TEMP_TOOLS); // For testing
  dataSource = [];

  newtool = new Tool('');

  add(name: String) {
    // TODO search for tool properly (by name)
    this.newtool.name = name;
    this.dataSource.push(this.newtool);
    this.newtool = {name: '', replacements: []};
  }

  remove(index: number) {
    this.dataSource.splice(index, 1);
  }

  getAll(): Tool[] {
    return Array.from(this.dataSource);
  }

  constructor() { }
}
