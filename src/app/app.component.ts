import { Component } from '@angular/core';
import { GlobalsVariable } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users = [];

  constructor(public globalVar: GlobalsVariable) {
  }
}
