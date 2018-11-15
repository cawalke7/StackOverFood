import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title = 'Stack OverFood - Recipe Generator';
  loginMenu = ['Login', 'Register'];
  loggedIn = ['My Recipes', 'Logout'];

  constructor() { }

  ngOnInit() {
  }

}
