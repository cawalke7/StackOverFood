import { Injectable } from '@angular/core';
import { Tool } from '../model/tool';

@Injectable({
  providedIn: 'root'
})
export class KitchentoolsService {
  dataSource = [];

  newtool = new Tool('');

  add(name) {
    // TODO search for tool properly (by name)
    this.newtool.name = name;
    this.dataSource.push(this.newtool);
    this.newtool = {name: '', replacements: []};
  }

  remove(index) {
    this.dataSource.splice(index, 1);
  }

  getAll(): Tool[] {
    return this.dataSource;
  }

  constructor() { }
}
