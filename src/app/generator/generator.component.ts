import { Component, OnInit } from '@angular/core';
import { GeneratorService } from './generator.service';
import { Recipe } from '../model/recipe';

const N = 10;

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  allLoaded: Recipe[] = [];
  dataSource: Recipe[] = [];

  constructor(private service: GeneratorService) { }

  ngOnInit() {
  }

  generate() {
    this.allLoaded = this.service.generate();
    console.log(this.allLoaded);

    this.getNRecipes();
  }

  getNRecipes() {
    if (this.allLoaded.length <= N) {
      this.dataSource = Array.from(this.allLoaded);
    } else {
      // TODO: just return N recipes
      this.dataSource = Array.from(this.allLoaded);
    }
  }

}
